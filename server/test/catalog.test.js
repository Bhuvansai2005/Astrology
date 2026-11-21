import test from 'node:test';
import assert from 'node:assert/strict';
import { findCatalogItem } from '../src/config/catalog.js';

test('resolves catalogue items by book id', () => {
  const item = findCatalogItem({ bookId: '30' });
  assert.equal(item?.price, 550);
  assert.equal(item?.key, '30');
});

test('rejects unknown catalogue items', () => {
  assert.equal(findCatalogItem({ bookId: 'unknown-item-xyz' }), null);
  assert.equal(findCatalogItem(null), null);
});
