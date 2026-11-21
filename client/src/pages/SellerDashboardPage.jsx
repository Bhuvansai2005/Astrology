import { useEffect, useMemo, useState } from 'react';
import { api } from '../config';

const STATUS_OPTIONS = [
  'pending',
  'confirmed',
  'processing',
  'shipped',
  'delivered',
  'cancelled',
];

const statusStyles = {
  pending: 'bg-amber-100 text-amber-800',
  confirmed: 'bg-sky-100 text-sky-800',
  processing: 'bg-violet-100 text-violet-800',
  shipped: 'bg-indigo-100 text-indigo-800',
  delivered: 'bg-emerald-100 text-emerald-800',
  cancelled: 'bg-red-100 text-red-800',
};

function formatDate(value) {
  if (!value) return '-';
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value));
}

function formatMoney(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value || 0);
}

export default function SellerDashboardPage() {
  const [token, setToken] = useState(() =>
    sessionStorage.getItem('apb_seller_token') || ''
  );
  const [password, setPassword] = useState('');
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const authHeaders = () => ({
    headers: { Authorization: `Bearer ${token}` },
  });

  const loadOrders = async (activeToken = token) => {
    setLoading(true);
    setError('');
    try {
      const response = await api.get('/admin/orders', {
        headers: { Authorization: `Bearer ${activeToken}` },
      });
      setOrders(response.data.orders || []);
    } catch (requestError) {
      if (requestError.response?.status === 401) {
        sessionStorage.removeItem('apb_seller_token');
        setToken('');
      }
      setError(requestError.response?.data?.error || 'Could not load orders.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) loadOrders(token);
  }, [token]);

  const login = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await api.post('/admin/login', { password });
      sessionStorage.setItem('apb_seller_token', response.data.token);
      setToken(response.data.token);
      setPassword('');
    } catch (requestError) {
      setError(requestError.response?.data?.error || 'Login failed.');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    sessionStorage.removeItem('apb_seller_token');
    setToken('');
  };

  const updateStatus = async (orderRef, status) => {
    setError('');
    try {
      const response = await api.patch(
        `/admin/orders/${orderRef}/status`,
        { status },
        authHeaders()
      );
      setOrders((current) =>
        current.map((order) =>
          order.orderRef === orderRef ? response.data.order : order
        )
      );
    } catch (requestError) {
      setError(requestError.response?.data?.error || 'Could not update order.');
    }
  };

  const filteredOrders = useMemo(() => {
    const query = search.trim().toLowerCase();
    return orders.filter((order) => {
      const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
      const matchesSearch =
        !query ||
        order.orderRef.toLowerCase().includes(query) ||
        order.customer?.name?.toLowerCase().includes(query) ||
        order.customer?.phone?.includes(query);
      return matchesStatus && matchesSearch;
    });
  }, [orders, search, statusFilter]);

  const stats = useMemo(() => {
    const revenue = orders
      .filter((order) => order.status !== 'cancelled')
      .reduce((sum, order) => sum + Number(order.total || 0), 0);
    const pending = orders.filter((order) =>
      ['pending', 'confirmed', 'processing'].includes(order.status)
    ).length;
    const shipped = orders.filter((order) => order.status === 'shipped').length;
    return { revenue, pending, shipped, total: orders.length };
  }, [orders]);

  if (!token) {
    return (
      <main className="min-h-screen bg-[#f5f1e8] grid place-items-center px-4">
        <form
          onSubmit={login}
          className="w-full max-w-md bg-white border border-[#ded5c3] p-7 md:p-9 shadow-[0_18px_50px_rgba(75,35,20,0.12)]"
        >
          <div className="w-12 h-12 rounded-full border border-[#b8995f] text-[#6f2623] grid place-items-center font-serif text-2xl mb-5">
            ॐ
          </div>
          <p className="text-[10px] tracking-[0.18em] uppercase font-bold text-[#b07b25] mb-2">
            Seller Portal
          </p>
          <h1 className="font-serif text-3xl text-[#591d1b] mb-2">Order Dashboard</h1>
          <p className="text-sm text-[#756a60] mb-7">
            Sign in to manage Adya Pustaka Bhandara orders.
          </p>
          <label className="block text-xs font-bold text-[#591d1b] mb-2" htmlFor="seller-password">
            Password
          </label>
          <input
            id="seller-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full border border-[#ded5c3] px-4 py-3 mb-4 outline-none focus:border-[#591d1b]"
            required
          />
          {error && (
            <p className="mb-4 rounded bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#c58b32] hover:bg-[#ad7426] disabled:opacity-60 text-white px-4 py-3 text-sm font-bold"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#2f2925]">
      <header className="bg-[#35130f] text-white">
        <div className="max-w-[1180px] mx-auto px-4 md:px-6 h-[74px] flex items-center justify-between">
          <div>
            <p className="text-[9px] tracking-[0.18em] uppercase text-[#dec58a]">Adya Pustaka Bhandara</p>
            <h1 className="font-serif text-xl">Dashboard</h1>
          </div>
          <button
            type="button"
            onClick={logout}
            className="border border-white/30 px-4 py-2 text-xs font-bold hover:bg-white hover:text-[#35130f]"
          >
            Log out
          </button>
        </div>
      </header>

      <div className="max-w-[1180px] mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mb-8">
          {[
            ['Total orders', stats.total],
            ['Pending', stats.pending],
            ['Shipped', stats.shipped],
            ['Revenue', formatMoney(stats.revenue)],
          ].map(([label, value]) => (
            <div key={label} className="bg-white border border-[#ded5c3] p-4 md:p-5">
              <p className="text-xs text-[#756a60] mb-2">{label}</p>
              <p className="font-serif text-2xl md:text-3xl font-semibold text-[#591d1b]">{value}</p>
            </div>
          ))}
        </div>

        <section className="bg-white border border-[#ded5c3]">
          <div className="p-4 md:p-5 border-b border-[#ded5c3] flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-xl text-[#591d1b]">Orders</h2>
              <p className="text-xs text-[#756a60] mt-1">{filteredOrders.length} results</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search order or customer"
                className="border border-[#ded5c3] px-3 py-2 text-sm outline-none focus:border-[#591d1b]"
              />
              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                className="border border-[#ded5c3] px-3 py-2 text-sm bg-white"
              >
                <option value="all">All statuses</option>
                {STATUS_OPTIONS.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>

          {error && (
            <p className="m-4 rounded bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
          )}

          {loading ? (
            <div className="p-12 text-center text-sm text-[#756a60]">Loading orders...</div>
          ) : filteredOrders.length === 0 ? (
            <div className="p-12 text-center">
              <p className="font-serif text-lg text-[#591d1b]">No orders found</p>
              <p className="text-sm text-[#756a60] mt-1">Try another search or status.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] text-left">
                <thead className="bg-[#faf7f0] text-[10px] uppercase tracking-wider text-[#756a60]">
                  <tr>
                    <th className="px-5 py-3">Order</th>
                    <th className="px-5 py-3">Customer</th>
                    <th className="px-5 py-3">Items</th>
                    <th className="px-5 py-3">Total</th>
                    <th className="px-5 py-3">Date</th>
                    <th className="px-5 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eee7da]">
                  {filteredOrders.map((order) => (
                    <tr key={order.orderRef} className="text-sm align-top">
                      <td className="px-5 py-4 font-mono font-bold text-[#591d1b]">
                        {order.orderRef}
                      </td>
                      <td className="px-5 py-4">
                        <p className="font-semibold">{order.customer?.name}</p>
                        <p className="text-xs text-[#756a60] mt-1">{order.customer?.phone}</p>
                      </td>
                      <td className="px-5 py-4">
                        {order.items?.map((item) => (
                          <p key={`${order.orderRef}-${item.bookId}`} className="text-xs leading-5">
                            {item.name} × {item.quantity}
                          </p>
                        ))}
                      </td>
                      <td className="px-5 py-4 font-semibold">{formatMoney(order.total)}</td>
                      <td className="px-5 py-4 text-xs text-[#756a60]">
                        {formatDate(order.createdAt)}
                      </td>
                      <td className="px-5 py-4">
                        <span className={`inline-block rounded px-2 py-1 text-[10px] font-bold mb-2 ${statusStyles[order.status] || 'bg-gray-100'}`}>
                          {order.status}
                        </span>
                        <select
                          aria-label={`Update status for ${order.orderRef}`}
                          value={order.status}
                          onChange={(event) => updateStatus(order.orderRef, event.target.value)}
                          className="block border border-[#ded5c3] px-2 py-1 text-xs bg-white"
                        >
                          {STATUS_OPTIONS.map((status) => (
                            <option key={status} value={status}>{status}</option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
