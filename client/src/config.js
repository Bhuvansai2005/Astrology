import axios from 'axios';

export const BUSINESS = {
  centre: {
    kn: 'ಆದ್ಯ ಜ್ಯೋತಿರ್ವಿಜ್ಞಾನ ಸಂಶೋಧನಾ ಕೇಂದ್ರ',
    en: 'Adya Jyothirvijnana Samshodhana Kendra',
  },
  name: { kn: 'ಆದ್ಯ ಪುಸ್ತಕ ಭಂಡಾರ', en: 'Adya Pustaka Bhandara' },
  phone: ['91642 42099', '90364 03740'],
  phoneLinks: ['tel:+919164242099', 'tel:+919036403740'],
  whatsapp: 'https://wa.me/919164242099',
  orderWhatsapp: 'https://wa.me/919164242099',
  whatsappCatalogue: 'https://wa.me/c/919164242099',
  whatsappGroup: 'https://chat.whatsapp.com/GfZFYQ2ngH5C454ItJoQlv?s=cl&p=a&ilr=4',
  telegram: 'https://t.me/Adyapustakabhandara',
  facebook: 'https://www.facebook.com/share/1Fz3ZG4Tus/',
  instagram: 'https://www.instagram.com/adyapustakabhandara02/',
  instagramHandle: '@adyapustakabhandara02',
  googleMaps: 'https://share.google/tsjfJ2cpa0wcjOhmx',
};

export const HERO_IMAGES = {
  hero: '/images/books/rigveda-samhita-14-pustakagalu.webp',
  about: '/images/books/charaka-samhite.webp',
  location: '/images/books/dharmasimdhu.webp',
};

export const CATEGORY_IMAGES = {
  "4": "/images/books/yajurveda-taitariya-samhite-4-pustakagalu.webp",
  "14": "/images/books/rigveda-samhita-14-pustakagalu.webp",
  "30": "/images/books/30-dinadalli-jyotishya-kaliyiri.webp",
  "301": "/images/books/301-brihat-yamtra-raaja.webp",
  "400": "/images/books/satikaa-mamtra-mohodadi-400-varsha-praacheena-gramtha.webp",
  "501": "/images/books/laal-kitaab-501-sarala-upaaya-parihaaragalu.webp",
  "astrology": "/images/books/30-dinadalli-jyotishya-kaliyiri.webp",
  "vastu": "/images/books/vaastu-shaastra-reetya-aayaadi-vargaganita.webp",
  "prashna": "/images/books/ashtamamgala-prashna-deepikaa.webp",
  "numerology": "/images/books/bhavishya-nudiyuva-samkhyegalu.webp",
  "tantra-mantra": "/images/books/shree-vidyaa-mamtra-yamtra-tamtra-rahasyagalu.webp",
  "remedies-shanti": "/images/books/aashlesha-bali-sarpa-bali-kaala-sarpayoga-shaamti.webp",
  "vedas-agamas": "/images/books/rigveda-samhita-14-pustakagalu.webp",
  "pooja-homa": "/images/books/satya-naaraayana-poojaa-vidhi-bhaaga-1-mattu-2.webp",
  "puranas-upanishads": "/images/books/shree-vishnu-puraanam.webp",
  "yoga-ayurveda": "/images/books/charaka-samhite.webp",
  "dharmashastra": "/images/books/dharmasimdhu.webp",
  "sacred-articles": "/images/books/arishina-maale.webp",
  "item-176": "/images/books/asali-praacheena-brihat-raavana-samhita.webp",
  "item-217": "/images/books/asali-laal-kitaabna-adbhuta-tamtra-upaayagalu.webp",
  "item-113": "/images/books/uttara-kaalaamrita.webp",
  "item-58": "/images/books/kaala-nirnaya-jyotishya.webp",
  "item-209": "/images/books/kaalaa-kitaab.webp",
  "item-105": "/images/books/jyotishya-nighamtu.webp",
  "item-66": "/images/books/jyotishya-paarijaata.webp",
  "item-96": "/images/books/jyotishya-saarakosha.webp",
  "item-168": "/images/books/jyotishyaamrita.webp",
  "item-64": "/images/books/dhruvanaadi-siddaamta.webp",
  "item-27": "/images/books/nakshatradhaarita-jyotishya.webp",
  "item-128": "/images/books/naadi-jyotishya-maargadarshi.webp",
  "1-2": "/images/books/neevu-jyotishyare-bhaaga-1-bhaaga-2.webp",
  "item-148": "/images/books/phala-deepikaa.webp",
  "item-91": "/images/books/phaladeepika.webp",
  "item-45": "/images/books/brihajjaatakam.webp",
  "item-155": "/images/books/brihajjaatakam-2.webp",
  "item-73": "/images/books/brihat-paraashara-hora-shaastram.webp",
  "item-37": "/images/books/brihat-samhita.webp",
  "item-126": "/images/books/brihat-samhita-2.webp",
  "item-31": "/images/books/brihat-samhitaa.webp",
  "item-171": "/images/books/muhoorta-nirnaya.webp",
  "item-90": "/images/books/melaa-meli.webp",
  "item-175": "/images/books/raavana-samhitaa.webp",
  "item-143": "/images/books/raashi-lagnaadi-phalagalu.webp",
  "item-6": "/images/books/shambhu-horaa-prakaasha.webp",
  "item-17": "/images/books/samkshipta-naadi-sootragalu-mattu-jeevitaavadhiya-mukhya-ghatanegalu.webp",
  "item-123": "/images/books/saamudrikaa-samuchchhaya.webp",
  "item-18": "/images/books/hasta-saamudrika-phalashaastra.webp",
  "item-70": "/images/books/horaa-tamtra.webp",
  "item-204": "/images/books/horaatamtra.webp",
  "item-178": "/images/books/nimma-mane-vaastu-neeve-nodikolli.webp",
  "item-160": "/images/books/nimma-manege-neeve-imjiniyar.webp",
  "item-153": "/images/books/varga-sameekshe.webp",
  "item-4": "/images/books/vaastu-shaastra-reetya-aayaadi-vargaganita.webp",
  "item-95": "/images/books/vaijnyaanika-vaastu-shaastrada-adbhuta-prashnottaragalu.webp",
  "item-151": "/images/books/sashaastreeya-vaastu.webp",
  "item-149": "/images/books/ashtamamgala-prashna-deepikaa.webp",
  "item-121": "/images/books/nimma-prashnege-aamjaneyana-uttara.webp",
  "item-210": "/images/books/prashna-chamdeshvara.webp",
  "item-110": "/images/books/prashna-samjeevini.webp",
  "item-30": "/images/books/prashnamaarga-shloka-samgraha.webp",
  "item-152": "/images/books/prashne-samdesha-deva-prashne.webp",
  "item-98": "/images/books/nemalaji.webp",
  "item-211": "/images/books/bhavishya-nudiyuva-samkhyegalu.webp",
  "item-193": "/images/books/ashtakarmayukta-siddha-shaabara-mamtra-prayoga.webp",
  "item-57": "/images/books/aasheervachana-mamtrah.webp",
  "item-7": "/images/books/uddeeshaa-tamtra.webp",
  "item-137": "/images/books/kaaka-chamdeeshvara-tamtra.webp",
  "item-85": "/images/books/kaakachamdeeshvara-tamtra.webp",
  "item-112": "/images/books/kaartaveeryaarjuna-tamtra.webp",
  "item-2": "/images/books/kaali-upaasanaa-tamtra.webp",
  "item-5": "/images/books/ganapati-mamtropaasana-deepikaa.webp",
  "item-32": "/images/books/ganapati-yamtra-mamtra-tamtra.webp",
  "item-184": "/images/books/ganapati-yamtra-mamtra-tamtra-2.webp",
  "item-12": "/images/books/daamara-tamtra-rahasya.webp",
  "item-212": "/images/books/tamtra-kusumaamjali.webp",
  "item-147": "/images/books/tamtra-saadhana-rahasya.webp",
  "item-200": "/images/books/tamtrada-moolaka-manokaamanegala-praapti.webp",
  "item-107": "/images/books/taaraa-pratyamgiraa-yamtra-mamtra-tamtra.webp",
  "item-115": "/images/books/taaraa-pratyamgiraa-yamtra-mamtra-tamtra-2.webp",
  "item-179": "/images/books/nirvaana-tamtram.webp",
  "item-195": "/images/books/praacheena-asali-imdrajaala-mahemdrajaala-vidye.webp",
  "item-141": "/images/books/batukabhairava-tamtrakalpaha.webp",
  "item-119": "/images/books/brihat-bhairava-tamtra.webp",
  "item-213": "/images/books/brihat-bhairava-tamtra-2.webp",
  "item-185": "/images/books/mamtra-mamjari.webp",
  "item-94": "/images/books/mamtragala-chamatkaara.webp",
  "item-20": "/images/books/manegobba-maamtrika.webp",
  "item-71": "/images/books/malayaala-yamtra-mamtra-tamtra.webp",
  "item-131": "/images/books/malayaala-yamtra-mamtra-tamtra-2.webp",
  "item-162": "/images/books/mahaapratyamgiraa-samputa.webp",
  "item-158": "/images/books/moolamamtra-prayogah.webp",
  "item-133": "/images/books/yamtra-kattu.webp",
  "item-161": "/images/books/yamtra-chimtaamani.webp",
  "item-52": "/images/books/yamtra-mamtra-aamjaneya-tamtra.webp",
  "item-145": "/images/books/yamtra-mamtra-aamjaneya-tamtra-2.webp",
  "item": "/images/books/yakshini-samputa.webp",
  "item-142": "/images/books/roodhigata-vaamaachaara-prayoga.webp",
  "item-3": "/images/books/vaamakeshvari-tamtra.webp",
  "1-2-2": "/images/books/vijnyaana-bhairava-tamtra-bhaaga-1-mattu-2.webp",
  "item-35": "/images/books/shaabara-mamtra-prayoga.webp",
  "item-187": "/images/books/shaaradaa-tilaka.webp",
  "item-25": "/images/books/sheeghra-phaladaayaka-puraatana-mamtra-rahasya.webp",
  "item-167": "/images/books/sheeghra-phaladaayaka-puraatana-mamtra-rahasya-2.webp",
  "item-157": "/images/books/shree-dattaatreya-tamtra.webp",
  "item-69": "/images/books/shree-dattaatreya-mamtra.webp",
  "item-198": "/images/books/shree-durgaa-saptashatiya-mamtra-prayoga.webp",
  "item-203": "/images/books/shree-baalaa-tamtram.webp",
  "item-54": "/images/books/shree-mamtra-rahasya.webp",
  "item-42": "/images/books/shree-renukaa-parashuraama-tamtram.webp",
  "item-10": "/images/books/shree-vidyaa.webp",
  "item-68": "/images/books/shree-vidyaa-mamtra-yamtra-tamtra-rahasyagalu.webp",
  "item-116": "/images/books/shree-vidyaa-yamtra-mamtra-tamtra-rahasya.webp",
  "item-39": "/images/books/shree-vidyaa-sahasradhaaraa.webp",
  "item-122": "/images/books/shree-vidyaanusamdhaana.webp",
  "item-79": "/images/books/shree-vidyaasaparya.webp",
  "item-180": "/images/books/shreechakra.webp",
  "item-135": "/images/books/shreechakra-dashamahaavidyaa.webp",
  "item-44": "/images/books/shreechakra-dashamahaavidyaah.webp",
  "item-146": "/images/books/shreechakra-navaavarana-vidhi.webp",
  "item-89": "/images/books/shreechakra-yamtra-raaja.webp",
  "item-111": "/images/books/shreechakra-shreechakreshvari.webp",
  "item-165": "/images/books/shodasha-nitya-yamtra-saadhane.webp",
  "item-59": "/images/books/sakala-devataa-gaayitri-mamtragalu.webp",
  "item-74": "/images/books/satateeka-mamtra-mahodadhi.webp",
  "item-101": "/images/books/sateeka-mamtra-mahodadhi.webp",
  "item-102": "/images/books/sateeka-mamtramahodadhi.webp",
  "item-77": "/images/books/sulemaani-yamtra-mamtra-tamtra.webp",
  "item-208": "/images/books/sulemaani-yamtra-mamtra-tamtra-2.webp",
  "item-23": "/images/books/hanumaan-yamtra-mamtra-tamtra.webp",
  "item-9": "/images/books/aashlesha-bali-sarpa-bali-kaala-sarpayoga-shaamti.webp",
  "item-129": "/images/books/karma-vipaaka-samhitaa.webp",
  "item-202": "/images/books/kuja-dosha-vivechane.webp",
  "item-72": "/images/books/jaataka-parihaara.webp",
  "item-134": "/images/books/navagraha-shaamti-kalpa.webp",
  "item-13": "/images/books/pitri-dosha-kaarana-parihaara.webp",
  "item-186": "/images/books/shaapa-dosha-parihaara-prakaasha.webp",
  "item-194": "/images/books/saprayoga-shaamti-chamdrikaa.webp",
  "item-87": "/images/books/atharvana-veda.webp",
  "item-201": "/images/books/aadhunika-kaalakke-veda-jnyaana.webp",
  "item-36": "/images/books/rigveda-devataarchana-vidhi.webp",
  "item-170": "/images/books/rigveda-prayoga-deepikaa.webp",
  "item-76": "/images/books/rigvediya-prayoga-samputa.webp",
  "item-99": "/images/books/rigvediya-sookta-saurabha.webp",
  "item-61": "/images/books/yajurveda-upaakarma-prayogah.webp",
  "item-84": "/images/books/yajurvediya-upakarma-prayoga-vidhaanam.webp",
  "item-190": "/images/books/yajurvediya-pitrimedika-prayoga.webp",
  "item-65": "/images/books/yajurvedeeya-pitrimedhika-prayogah.webp",
  "item-118": "/images/books/yajurvedeeya-pitrimedhika-prayogah-2.webp",
  "item-83": "/images/books/yaajusha-prayoga-ratnamaalaa.webp",
  "item-53": "/images/books/yaajusha-sookta-saurabha.webp",
  "item-16": "/images/books/veda-vasamta.webp",
  "item-75": "/images/books/veda-samvatsara.webp",
  "item-166": "/images/books/shaivaagamaanusaara-nityaarchanavidhi.webp",
  "item-33": "/images/books/saamaveda-poorva-mattu-uttaraarchika-eradu-pustakagalu.webp",
  "item-216": "/images/books/agnimukha-prakaasha.webp",
  "item-56": "/images/books/agnimukha-prayoga.webp",
  "item-46": "/images/books/aashlesha-kalpa.webp",
  "item-26": "/images/books/aashvaalayana-paitrimedika-medike-prayoga.webp",
  "item-81": "/images/books/utsava-taramgini.webp",
  "item-60": "/images/books/kalyaanotsava-kaumudi.webp",
  "item-93": "/images/books/kalyaanotsava-deepikaa.webp",
  "item-197": "/images/books/kaamya-prakaasha.webp",
  "item-169": "/images/books/deepa-samputa.webp",
  "item-214": "/images/books/devataarchana-vidhihi.webp",
  "item-51": "/images/books/devapratishtaa-choodaavani.webp",
  "item-103": "/images/books/devapratishthaa-choodaamani.webp",
  "item-62": "/images/books/nitya-pamchaayatana-devataarchana-vistaraneeyam.webp",
  "item-55": "/images/books/nitya-poojaa-vidhi.webp",
  "item-183": "/images/books/nitya-samskaara.webp",
  "item-22": "/images/books/pamcha-durgaa-deepa-namaskaara-vidhi.webp",
  "item-49": "/images/books/puraanokta-prayoga-samgraha.webp",
  "item-86": "/images/books/poojaahomakalpadrumah.webp",
  "item-164": "/images/books/prayoga-samputa.webp",
  "item-191": "/images/books/mamdala-darpana.webp",
  "item-80": "/images/books/rudrashtaadhyaayi.webp",
  "item-92": "/images/books/vatuka-bhairava-upaasane.webp",
  "item-182": "/images/books/vaamcha-kalpa-lataa.webp",
  "item-177": "/images/books/vrata-maalaa.webp",
  "item-104": "/images/books/vrataratnam.webp",
  "item-106": "/images/books/shree-ashta-vinaayaka-upaasana-sarvasvam.webp",
  "item-48": "/images/books/shree-uchchishta-mahaaganapati-varivasyaa.webp",
  "item-189": "/images/books/shree-chamdi-homa-prayoga.webp",
  "item-132": "/images/books/shree-durgaa-poojaa-deepaa-namaskaara-homa-vidhi.webp",
  "item-50": "/images/books/shree-naamdi-prayoga-vidhaanam.webp",
  "item-11": "/images/books/shree-baala-saparya.webp",
  "item-188": "/images/books/shree-bhairava-digbamdhana-prayoga.webp",
  "item-24": "/images/books/shree-bhairava-digbamdhanaa-prayoga.webp",
  "item-120": "/images/books/shree-mamgala-gauri-vrata-kathe.webp",
  "item-34": "/images/books/shree-rudrahomaprayogah.webp",
  "item-154": "/images/books/shree-satya-ganapati-vrata-vidhi.webp",
  "item-108": "/images/books/shree-satyanaaraayana-poojaa-vidhi.webp",
  "item-125": "/images/books/shree-hanumaan-pratishthaa-prayoga.webp",
  "item-150": "/images/books/shreeashta-vinaayaka-upaasanasarvasvam.webp",
  "item-206": "/images/books/shreekrishnavratakalpoktapoojaa.webp",
  "item-78": "/images/books/sateekaa-vrataratnam.webp",
  "item-29": "/images/books/svasti-punya-havaachana-mattu-navagraha-poojaa-vidhi.webp",
  "item-21": "/images/books/homa-samputa.webp",
  "item-207": "/images/books/ambikaa-vijaya.webp",
  "item-174": "/images/books/dinakkomdu-praarthane.webp",
  "item-181": "/images/books/padmapuraana.webp",
  "item-127": "/images/books/brihat-stotra-ratnaakara.webp",
  "item-117": "/images/books/laghu-devi-mahaatme.webp",
  "item-28": "/images/books/shree-ganesha-puraana.webp",
  "item-156": "/images/books/shree-chakra-roopini-shrimga-giri-devi-shree-shaaradaamba-vaibhava.webp",
  "item-159": "/images/books/shree-vishnu-puraanam.webp",
  "item-40": "/images/books/shree-shreenivaasa-kalyaanam.webp",
  "item-192": "/images/books/shreedevi-mahaatme.webp",
  "item-88": "/images/books/saumdarya-lahari-stotra-darpana.webp",
  "item-19": "/images/books/saumdaryalaharee-stotradeepike.webp",
  "item-215": "/images/books/aayurveda-mattu-padaartha-vijnyaana.webp",
  "item-97": "/images/books/gorakshaa-shataka.webp",
  "item-144": "/images/books/charaka-samhite.webp",
  "item-109": "/images/books/jnyaana-simdhu-neeli-hottige-gramtha.webp",
  "item-140": "/images/books/jnyaanasimdhu.webp",
  "item-172": "/images/books/patamjaliya-yogasootra.webp",
  "item-15": "/images/books/poorvajanma-punarjanma.webp",
  "item-138": "/images/books/yogaratna-mamjoosha.webp",
  "item-41": "/images/books/shiva-yoga-deepikaa.webp",
  "item-163": "/images/books/shivayoga-pradeepikaa.webp",
  "item-114": "/images/books/shivasamhite.webp",
  "item-205": "/images/books/sateekaa-jnyaanasimdhu.webp",
  "item-100": "/images/books/svaatmaraamara-hathayoga-pradeepikaa.webp",
  "item-136": "/images/books/hatha-pradeepikaa-brahmaanamdara-teekaasaara-sahita.webp",
  "item-130": "/images/books/hathayoga-raajayoga-muktige-maarga.webp",
  "item-199": "/images/books/ashtaadhyaayee.webp",
  "item-38": "/images/books/dharmashaastra.webp",
  "item-82": "/images/books/dharmasimdhu.webp",
  "item-8": "/images/books/nirnaya-simdhu.webp",
  "item-139": "/images/books/meghadootam.webp",
  "item-67": "/images/books/vivaaha-pamchaka.webp",
  "item-47": "/images/books/shaalagraama-pareeksha.webp",
  "item-14": "/images/books/samskrita-kannada-shabdaartha-kosham.webp",
  "item-43": "/images/books/sarala-samskrita-vyaakarana.webp",
  "item-63": "/images/books/sahasra-sooktigalu.webp",
  "item-124": "/images/books/arishina-maale.webp",
  "item-196": "/images/books/kaaramguli-maalaa.webp",
  "6-mm": "/images/books/rudraakshi-maalaa-6-mm.webp",
  "item-173": "/images/books/vaijayamtimaalaa.webp"
};

export const CATALOG_ITEMS = [
  {
    "id": "30",
    "title": "30 ದಿನದಲ್ಲಿ ಜ್ಯೋತಿಷ್ಯ ಕಲಿಯಿರಿ",
    "sanskritLabel": "JYOTISHYA",
    "price": 550,
    "imageUrl": "/images/books/30-dinadalli-jyotishya-kaliyiri.webp",
    "category": "astrology",
    "description": "ಜ್ಯೋತಿಷ್ಯ ಕಲಿಯುವವರಿಗೆ ಹಾಗೂ ಕಲಿತು ಅಭ್ಯಾಸ ಮಾಡುತ್ತಿರುವವರಿಗೆ ಅದ್ಭುತವಾದಂತಹ ಜ್ಯೋತಿಷ್ಯವನ್ನು ಕಲಿಯುವಂತ ಅತಿ ಸುಲಭವಾಗಿ ಇರುವಂತಹ ಗ್ರಂಥ 30 ದಿನದಲ್ಲಿ ಜ್ಯೋತಿಷ್ಯ ಕಲಿಯಿರಿ ಎಂಬುವುದು ತುಂಬಾ ಸುಂದರವಾಗಿದೆ"
  },
  {
    "id": "item-176",
    "title": "ಅಸಲಿ ಪ್ರಾಚೀನ ಬೃಹತ್ ರಾವಣ ಸಂಹಿತ",
    "sanskritLabel": "JYOTISHYA",
    "price": 800,
    "imageUrl": "/images/books/asali-praacheena-brihat-raavana-samhita.webp",
    "category": "astrology",
    "description": "ರಾವಣ ಸಂಹಿತ ಗ್ರಂಥದಲ್ಲಿ ಸುನಹರಿ ಸಿದ್ಧಾಂತ ದ್ವಾದಶ ಲಗ್ನಕ್ಕೆ ಸಂಬಂಧಪಟ್ಟ ಫಲಗಳು ನಕ್ಷತ್ರ ರಾಶಿ ಗ್ರಹಗಳ ಬಗ್ಗೆ ವಿವರಣೆ ಹಾಗೂ ಗ್ರಹಗಳ ಸಂಯೋಗ ಫಲಗಳನ್ನು ವಿಸ್ತಾರವಾಗಿ ಕೊಟ್ಟಿದ್ದಾರೆ"
  },
  {
    "id": "item-217",
    "title": "ಅಸಲಿ ಲಾಲ್ ಕಿತಾಬ್ನ ಅದ್ಭುತ ತಂತ್ರ ಉಪಾಯಗಳು",
    "sanskritLabel": "JYOTISHYA",
    "price": 220,
    "imageUrl": "/images/books/asali-laal-kitaabna-adbhuta-tamtra-upaayagalu.webp",
    "category": "astrology",
    "description": "ಸರಳವಾದ ಗ್ರಹಗಳ ರಕ್ಷಣೆಯನ್ನು ಪಡೆಯಲು ಪ್ರಭಾವಿ ಮತ್ತು ಕಡಿಮೆ ವೆಚ್ಚದಲ್ಲಿ ತುಂಬಾ ಅದ್ಭುತ ಪೂರ್ವವಾದಂತ ಪ್ರಯೋಗಗಳನ್ನು ಮಾಡಲು ಈ ಗ್ರಂಥ ತುಂಬಾ ಉಪಯುಕ್ತವಾಗಿದೆ ಇದರಲ್ಲಿ ಗ್ರಹಗಳಿಗೆ ಸಂಬಂಧಪಟ್ಟಂತ ದೋಷಗಳಿಗೆ ಪರಿಹಾರವನ್ನು ಸಹ ನೀಡಿದ್ದಾರೆ"
  },
  {
    "id": "item-113",
    "title": "ಉತ್ತರ ಕಾಲಾಮೃತ",
    "sanskritLabel": "JYOTISHYA",
    "price": 110,
    "imageUrl": "/images/books/uttara-kaalaamrita.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-58",
    "title": "ಕಾಲ ನಿರ್ಣಯ ಜ್ಯೋತಿಷ್ಯ",
    "sanskritLabel": "JYOTISHYA",
    "price": 160,
    "imageUrl": "/images/books/kaala-nirnaya-jyotishya.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-209",
    "title": "ಕಾಲಾ ಕಿತಾಬ್",
    "sanskritLabel": "JYOTISHYA",
    "price": 300,
    "imageUrl": "/images/books/kaalaa-kitaab.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-105",
    "title": "ಜ್ಯೋತಿಷ್ಯ ನಿಘಂಟು",
    "sanskritLabel": "JYOTISHYA",
    "price": 200,
    "imageUrl": "/images/books/jyotishya-nighamtu.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-66",
    "title": "ಜ್ಯೋತಿಷ್ಯ ಪಾರಿಜಾತ",
    "sanskritLabel": "JYOTISHYA",
    "price": 300,
    "imageUrl": "/images/books/jyotishya-paarijaata.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-96",
    "title": "ಜ್ಯೋತಿಷ್ಯ ಸಾರಕೋಶ",
    "sanskritLabel": "JYOTISHYA",
    "price": 800,
    "imageUrl": "/images/books/jyotishya-saarakosha.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-168",
    "title": "ಜ್ಯೋತಿಷ್ಯಾಮೃತ",
    "sanskritLabel": "JYOTISHYA",
    "price": 100,
    "imageUrl": "/images/books/jyotishyaamrita.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-64",
    "title": "ಧ್ರುವನಾಡಿ ಸಿದ್ದಾಂತ",
    "sanskritLabel": "JYOTISHYA",
    "price": 125,
    "imageUrl": "/images/books/dhruvanaadi-siddaamta.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-27",
    "title": "ನಕ್ಷತ್ರಧಾರಿತ ಜ್ಯೋತಿಷ್ಯ",
    "sanskritLabel": "JYOTISHYA",
    "price": 550,
    "imageUrl": "/images/books/nakshatradhaarita-jyotishya.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-128",
    "title": "ನಾಡಿ ಜ್ಯೋತಿಷ್ಯ ಮಾರ್ಗದರ್ಶಿ",
    "sanskritLabel": "JYOTISHYA",
    "price": 220,
    "imageUrl": "/images/books/naadi-jyotishya-maargadarshi.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "1-2",
    "title": "ನೀವು ಜ್ಯೋತಿಷ್ಯರೇ ಭಾಗ-1 ಭಾಗ-2",
    "sanskritLabel": "JYOTISHYA",
    "price": 2100,
    "imageUrl": "/images/books/neevu-jyotishyare-bhaaga-1-bhaaga-2.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-148",
    "title": "ಫಲ ದೀಪಿಕಾ",
    "sanskritLabel": "JYOTISHYA",
    "price": 300,
    "imageUrl": "/images/books/phala-deepikaa.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-91",
    "title": "ಫಲದೀಪಿಕ",
    "sanskritLabel": "JYOTISHYA",
    "price": 300,
    "imageUrl": "/images/books/phaladeepika.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-45",
    "title": "ಬೃಹಜ್ಜಾತಕಮ್",
    "sanskritLabel": "JYOTISHYA",
    "price": 500,
    "imageUrl": "/images/books/brihajjaatakam.webp",
    "category": "astrology",
    "description": "ರಾಶಿ ಪ್ರಭೇದ ಗ್ರಹಯೋನಿ ದಶ ಅಂತರ್ದಶ ಅಷ್ಟಕ ವರ್ಗ ಕರ್ಮಜೀವ ಆಯುರ್ದಾಯ ಅರಿಷ್ಟ ಲಾಭ ನಾಮದ ಯೋಗ ರಾಜಯೋಗ ಚಂದ್ರಯೋಗ ದ್ವಿಗ್ರಹ ಯೋಗ ದೃಷ್ಟಿ ಫಲದಾಯ ಭಾವಧ್ಯಾಯ ಇನ್ನು ಹಲವಾರು ವಿಚಾರದ ಬಗ್ಗೆ ವಿಸ್ತಾರವಾಗಿ ಕೊಟ್ಟಿದ್ದಾರೆ"
  },
  {
    "id": "item-155",
    "title": "ಬೃಹಜ್ಜಾತಕಮ್",
    "sanskritLabel": "JYOTISHYA",
    "price": 500,
    "imageUrl": "/images/books/brihajjaatakam-2.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-73",
    "title": "ಬೃಹತ್ ಪರಾಶರ ಹೋರ ಶಾಸ್ತ್ರಮ್",
    "sanskritLabel": "JYOTISHYA",
    "price": 1100,
    "imageUrl": "/images/books/brihat-paraashara-hora-shaastram.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-37",
    "title": "ಬೃಹತ್ ಸಂಹಿತ",
    "sanskritLabel": "JYOTISHYA",
    "price": 700,
    "imageUrl": "/images/books/brihat-samhita.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-126",
    "title": "ಬೃಹತ್ ಸಂಹಿತ",
    "sanskritLabel": "JYOTISHYA",
    "price": 700,
    "imageUrl": "/images/books/brihat-samhita-2.webp",
    "category": "astrology",
    "description": "ನವಗ್ರಹಗಳ ಬಗ್ಗೆ ವಿಸ್ತಾರವಾದ ಅಧ್ಯಾಯ ಸಪ್ತಋಷಿಗಳ ಬಗ್ಗೆ ನಕ್ಷತ್ರದ ಬಗ್ಗೆ ಗ್ರಹ ಬುತ್ತಿ ಯೋಗದ ಬಗ್ಗೆ ಮಳೆಯ ಬಗ್ಗೆ ಮಳೆಯ ಲಕ್ಷಣದ ಬಗ್ಗೆ ಶಕುನಗಳ ಬಗ್ಗೆ ವಾಸ್ತು ವಿದ್ಯೆಯ ಬಗ್ಗೆ ಮಹಾಪುರುಷ ಸ್ತ್ರೀ ಲಕ್ಷಣ ವಸ್ತ್ರ ಭೇದ ಚಾಮರ ಲಕ್ಷಣ ಕೋರ್ಮಲಕ್ಷಣ ಪಶ್ವಲಕ್ಷಣ ಇತ್ಯಾದಿ ಲಕ್ಷಣಗಳ ಬಗ್ಗೆ ವಿಸ್ತಾರವಾಗಿ ಕೊಟ್ಟಿದ್ದಾರೆ"
  },
  {
    "id": "item-31",
    "title": "ಬೃಹತ್ ಸಂಹಿತಾ",
    "sanskritLabel": "JYOTISHYA",
    "price": 700,
    "imageUrl": "/images/books/brihat-samhitaa.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-171",
    "title": "ಮುಹೂರ್ತ ನಿರ್ಣಯ",
    "sanskritLabel": "JYOTISHYA",
    "price": 300,
    "imageUrl": "/images/books/muhoorta-nirnaya.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-90",
    "title": "ಮೇಳಾ- ಮೇಳಿ",
    "sanskritLabel": "JYOTISHYA",
    "price": 200,
    "imageUrl": "/images/books/melaa-meli.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-175",
    "title": "ರಾವಣ ಸಂಹಿತಾ",
    "sanskritLabel": "JYOTISHYA",
    "price": 800,
    "imageUrl": "/images/books/raavana-samhitaa.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-143",
    "title": "ರಾಶಿ, ಲಗ್ನಾದಿ ಫಲಗಳು",
    "sanskritLabel": "JYOTISHYA",
    "price": 150,
    "imageUrl": "/images/books/raashi-lagnaadi-phalagalu.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "501",
    "title": "ಲಾಲ್ ಕಿತಾಬ್ 501 ಸರಳ ಉಪಾಯ ಪರಿಹಾರಗಳು",
    "sanskritLabel": "JYOTISHYA",
    "price": 150,
    "imageUrl": "/images/books/laal-kitaab-501-sarala-upaaya-parihaaragalu.webp",
    "category": "astrology",
    "description": "ಜೀವನದಲ್ಲಿ ಆಗುವಂತ ಪ್ರತಿಯೊಂದು ತೊಂದರೆಗಳಿಗೂ ಪುರಾತನ ಜ್ಯೋತಿಷ್ಯ ಪರಿಹಾರ ಗ್ರಂಥ ತುಂಬಾ ಸುಂದರವಾಗಿ ಪರಿಹಾರಗಳನ್ನು ಒಳಗೊಂಡಿದೆ ಎಲ್ಲರೂ ಸಹ ಓದಿ ತಿಳಿದುಕೊಳ್ಳಬಹುದಾದಂತ ಗ್ರಂಥ ಇದು"
  },
  {
    "id": "item-6",
    "title": "ಶಂಭು ಹೋರಾ ಪ್ರಕಾಶ",
    "sanskritLabel": "JYOTISHYA",
    "price": 300,
    "imageUrl": "/images/books/shambhu-horaa-prakaasha.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-17",
    "title": "ಸಂಕ್ಷಿಪ್ತ ನಾಡಿ ಸೂತ್ರಗಳು ಮತ್ತು ಜೀವಿತಾವಧಿಯ ಮುಖ್ಯ ಘಟನೆಗಳು",
    "sanskritLabel": "JYOTISHYA",
    "price": 250,
    "imageUrl": "/images/books/samkshipta-naadi-sootragalu-mattu-jeevitaavadhiya-mukhya-ghatanegalu.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-123",
    "title": "ಸಾಮುದ್ರಿಕಾ ಸಮುಚ್ಛಯ",
    "sanskritLabel": "JYOTISHYA",
    "price": 450,
    "imageUrl": "/images/books/saamudrikaa-samuchchhaya.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-18",
    "title": "ಹಸ್ತ ಸಾಮುದ್ರಿಕ ಫಲಶಾಸ್ತ್ರ",
    "sanskritLabel": "JYOTISHYA",
    "price": 150,
    "imageUrl": "/images/books/hasta-saamudrika-phalashaastra.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-70",
    "title": "ಹೋರಾ ತಂತ್ರ",
    "sanskritLabel": "JYOTISHYA",
    "price": 400,
    "imageUrl": "/images/books/horaa-tamtra.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-204",
    "title": "ಹೋರಾತಂತ್ರ",
    "sanskritLabel": "JYOTISHYA",
    "price": 400,
    "imageUrl": "/images/books/horaatamtra.webp",
    "category": "astrology",
    "description": ""
  },
  {
    "id": "item-178",
    "title": "ನಿಮ್ಮ ಮನೆ ವಾಸ್ತು ನೀವೇ ನೋಡಿಕೊಳ್ಳಿ",
    "sanskritLabel": "VASTU",
    "price": 200,
    "imageUrl": "/images/books/nimma-mane-vaastu-neeve-nodikolli.webp",
    "category": "vastu",
    "description": ""
  },
  {
    "id": "item-160",
    "title": "ನಿಮ್ಮ ಮನೆಗೆ ನೀವೇ ಇಂಜಿನಿಯರ್",
    "sanskritLabel": "VASTU",
    "price": 200,
    "imageUrl": "/images/books/nimma-manege-neeve-imjiniyar.webp",
    "category": "vastu",
    "description": ""
  },
  {
    "id": "item-153",
    "title": "ವರ್ಗ ಸಮೀಕ್ಷೆ",
    "sanskritLabel": "VASTU",
    "price": 440,
    "imageUrl": "/images/books/varga-sameekshe.webp",
    "category": "vastu",
    "description": ""
  },
  {
    "id": "item-4",
    "title": "ವಾಸ್ತು ಶಾಸ್ತ್ರ ರೀತ್ಯ ಆಯಾದಿ ವರ್ಗಗಣಿತ",
    "sanskritLabel": "VASTU",
    "price": 475,
    "imageUrl": "/images/books/vaastu-shaastra-reetya-aayaadi-vargaganita.webp",
    "category": "vastu",
    "description": ""
  },
  {
    "id": "item-95",
    "title": "ವೈಜ್ಞಾನಿಕ ವಾಸ್ತು ಶಾಸ್ತ್ರದ ಅದ್ಭುತ ಪ್ರಶ್ನೋತ್ತರಗಳು",
    "sanskritLabel": "VASTU",
    "price": 400,
    "imageUrl": "/images/books/vaijnyaanika-vaastu-shaastrada-adbhuta-prashnottaragalu.webp",
    "category": "vastu",
    "description": ""
  },
  {
    "id": "item-151",
    "title": "ಸಶಾಸ್ತ್ರೀಯ ವಾಸ್ತು",
    "sanskritLabel": "VASTU",
    "price": 550,
    "imageUrl": "/images/books/sashaastreeya-vaastu.webp",
    "category": "vastu",
    "description": ""
  },
  {
    "id": "item-149",
    "title": "ಅಷ್ಟಮಂಗಲ ಪ್ರಶ್ನ ದೀಪಿಕಾ",
    "sanskritLabel": "PRASHNA",
    "price": 200,
    "imageUrl": "/images/books/ashtamamgala-prashna-deepikaa.webp",
    "category": "prashna",
    "description": ""
  },
  {
    "id": "item-121",
    "title": "ನಿಮ್ಮ ಪ್ರಶ್ನೆಗೆ ಆಂಜನೇಯನ ಉತ್ತರ",
    "sanskritLabel": "PRASHNA",
    "price": 100,
    "imageUrl": "/images/books/nimma-prashnege-aamjaneyana-uttara.webp",
    "category": "prashna",
    "description": ""
  },
  {
    "id": "item-210",
    "title": "ಪ್ರಶ್ನ ಚಂಡೇಶ್ವರ",
    "sanskritLabel": "PRASHNA",
    "price": 70,
    "imageUrl": "/images/books/prashna-chamdeshvara.webp",
    "category": "prashna",
    "description": ""
  },
  {
    "id": "item-110",
    "title": "ಪ್ರಶ್ನ ಸಂಜೀವಿನಿ",
    "sanskritLabel": "PRASHNA",
    "price": 150,
    "imageUrl": "/images/books/prashna-samjeevini.webp",
    "category": "prashna",
    "description": ""
  },
  {
    "id": "item-30",
    "title": "ಪ್ರಶ್ನಮಾರ್ಗ ಶ್ಲೋಕ ಸಂಗ್ರಹ",
    "sanskritLabel": "PRASHNA",
    "price": 300,
    "imageUrl": "/images/books/prashnamaarga-shloka-samgraha.webp",
    "category": "prashna",
    "description": ""
  },
  {
    "id": "item-152",
    "title": "ಪ್ರಶ್ನೆ ಸಂದೇಶ ದೇವ ಪ್ರಶ್ನೆ",
    "sanskritLabel": "PRASHNA",
    "price": 200,
    "imageUrl": "/images/books/prashne-samdesha-deva-prashne.webp",
    "category": "prashna",
    "description": ""
  },
  {
    "id": "item-98",
    "title": "ನೇಮಲಜಿ",
    "sanskritLabel": "SANKHYA",
    "price": 100,
    "imageUrl": "/images/books/nemalaji.webp",
    "category": "numerology",
    "description": "ಸಂಖ್ಯಾಶಾಸ್ತ್ರದಲ್ಲಿ ಅಕ್ಷರಗಳ ವಿಜ್ಞಾನ ಅಕ್ಷರಗಳ ಸ್ಥಾನ ಹೆಸರಿನಲ್ಲಿ ಏನೇನಿದೆ ನಾಮಕರಣ ಮಾಡುವಾಗ ಸಂಸ್ಕಾರದಲ್ಲಿ ಹೆಸರು ಹೇಗೆ ಇಡಬೇಕು ಹೇಗೆ ನಾಮಾಂಕಿತವನ್ನು ತೆಗೆದುಕೊಳ್ಳಬೇಕು ಹೆಸರಿನಿಂದ ಹೇಗೆ ಭಾಗ್ಯ ಬದಲಾಗುತ್ತೆ ಹೆಸರುಗಳಿಗೆ ಹೇಗೆ ಶತ್ರು ಹೆಸರುಗಳು ಇರುತ್ತೆ ಸೂಕ್ತ ಸಂಗಾತಿಯಾಗಿ ಸಿಕ್ತಾರೆ ವಿದ್ಯೆ ಉದ್ಯೋಗ ಹೆಸರು ಗೌರವ ಎಲ್ಲ ಹೇಗೆ ಸಂಪಾದನೆ ಆಗುತ್ತೆ ಎಂಬುದನ್ನು ಇದರಲ್ಲಿ ಕೊಟ್ಟಿದ್ದಾರೆ"
  },
  {
    "id": "item-211",
    "title": "ಭವಿಷ್ಯ ನುಡಿಯುವ ಸಂಖ್ಯೆಗಳು",
    "sanskritLabel": "SANKHYA",
    "price": 170,
    "imageUrl": "/images/books/bhavishya-nudiyuva-samkhyegalu.webp",
    "category": "numerology",
    "description": ""
  },
  {
    "id": "301",
    "title": "301 ಬೃಹತ್ ಯಂತ್ರ ರಾಜ",
    "sanskritLabel": "TANTRA",
    "price": 600,
    "imageUrl": "/images/books/301-brihat-yamtra-raaja.webp",
    "category": "tantra-mantra",
    "description": "ಈ ಗ್ರಂಥದಲ್ಲಿ ಸ್ತಂಭದ ಮೋಹನ ಆಕರ್ಷಣ ವಿದ್ವೇಶನ ಮಾರಣ ಉಚ್ಚಾಟನಾ ಕ್ರಿಯೆಗಳು ಯಂತ್ರಗಳು ಎಲ್ಲಾ ದೇವರ ಯಂತ್ರಗಳು ಪೂಜಾ ವಿಧಾನ ಎಲ್ಲವನ್ನು ಸಹ ಸಂಪೂರ್ಣವಾಗಿ ಕೊಟ್ಟಿದ್ದಾರೆ"
  },
  {
    "id": "item-193",
    "title": "ಅಷ್ಟಕರ್ಮಯುಕ್ತ ಸಿದ್ಧ ಶಾಬರ ಮಂತ್ರ ಪ್ರಯೋಗ",
    "sanskritLabel": "TANTRA",
    "price": 300,
    "imageUrl": "/images/books/ashtakarmayukta-siddha-shaabara-mamtra-prayoga.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-57",
    "title": "ಆಶೀರ್ವಚನ ಮಂತ್ರಃ",
    "sanskritLabel": "TANTRA",
    "price": 430,
    "imageUrl": "/images/books/aasheervachana-mamtrah.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-7",
    "title": "ಉಡ್ಡೀಶಾ ತಂತ್ರ",
    "sanskritLabel": "TANTRA",
    "price": 500,
    "imageUrl": "/images/books/uddeeshaa-tamtra.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-137",
    "title": "ಕಾಕ ಚಂಡೀಶ್ವರ ತಂತ್ರ",
    "sanskritLabel": "TANTRA",
    "price": 200,
    "imageUrl": "/images/books/kaaka-chamdeeshvara-tamtra.webp",
    "category": "tantra-mantra",
    "description": "ಕಾಕ ಚಂಡೀಶ್ವರ ತಂತ್ರ ಎಂಬ ಗ್ರಂಥದಲ್ಲಿ ಗಿಡಮೂಲಿಕ ಔಷಧಿಗಳೊಂದಿಗೆ ವಿವಿಧ ಮಂತ್ರಗಳು ತಾಂತ್ರಿಕ ಕ್ರಿಯೆಗಳ ಸಾಧನೆಯ ವಿಧಾನವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಕೊಟ್ಟಿದ್ದಾರೆ"
  },
  {
    "id": "item-85",
    "title": "ಕಾಕಚಂಡೀಶ್ವರ ತಂತ್ರ",
    "sanskritLabel": "TANTRA",
    "price": 200,
    "imageUrl": "/images/books/kaakachamdeeshvara-tamtra.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-112",
    "title": "ಕಾರ್ತವೀರ್ಯಾರ್ಜುನ ತಂತ್ರ",
    "sanskritLabel": "TANTRA",
    "price": 200,
    "imageUrl": "/images/books/kaartaveeryaarjuna-tamtra.webp",
    "category": "tantra-mantra",
    "description": "ಆಧುನಿಕ ಪ್ರಪಂಚದಲ್ಲಿ ಅನೇಕ ಕಷ್ಟ ನೋವುಗಳಿಗೂ ನಿವಾರಣೋಪಾಯಗಳನ್ನ ತೋರಿಸುವುದಾಗಿ ಇದರಲ್ಲಿ ಮಂತ್ರ ಕವಚ ಅದ್ಬುತವಾದ ಪ್ರಭಾವವನ್ನು ತೋರಿಸಬಲ್ಲವು ಶತ್ರು ಬಾದೆ ಚೋರ ಬಾದೆ ವಿಘ್ನಗಳು ಕಾರ್ಯ ನಷ್ಟ ವ್ಯಾಘ್ರಗಳಿಂದ ಜಂತುಗಳಿಂದ ಬಾದೆ ಇನ್ನು ಅನೇಕ ವಿಧವಾದಂತ ತೊಂದರೆಗೆ ಈ ತಂತ್ರವನ್ನು ಉಪಯೋಗಿಸಲಾಗುತ್ತದೆ"
  },
  {
    "id": "item-2",
    "title": "ಕಾಳಿ ಉಪಾಸನಾ ತಂತ್ರ",
    "sanskritLabel": "TANTRA",
    "price": 150,
    "imageUrl": "/images/books/kaali-upaasanaa-tamtra.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-5",
    "title": "ಗಣಪತಿ ಮಂತ್ರೋಪಾಸನ ದೀಪಿಕಾ",
    "sanskritLabel": "TANTRA",
    "price": 450,
    "imageUrl": "/images/books/ganapati-mamtropaasana-deepikaa.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-32",
    "title": "ಗಣಪತಿ ಯಂತ್ರ ಮಂತ್ರ ತಂತ್ರ",
    "sanskritLabel": "TANTRA",
    "price": 150,
    "imageUrl": "/images/books/ganapati-yamtra-mamtra-tamtra.webp",
    "category": "tantra-mantra",
    "description": "ಗಣಪತಿಯ ಪೂಜೆ ಗಣಪತಿಯ ಚಿಂತನೆ ಚತುರ್ಥಿ ವ್ರತ ಕಥೆ ಹಲವಾರು ಗಣಪತಿಗಳ ಪೂಜೆ ಯಂತ್ರ ಮಂತ್ರಗಳ ವಿಧಾನವನ್ನು ಈ ಪುಸ್ತಕದಲ್ಲಿ ನೋಡಬಹುದು"
  },
  {
    "id": "item-184",
    "title": "ಗಣಪತಿ ಯಂತ್ರ ಮಂತ್ರ ತಂತ್ರ",
    "sanskritLabel": "TANTRA",
    "price": 150,
    "imageUrl": "/images/books/ganapati-yamtra-mamtra-tamtra-2.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-12",
    "title": "ಡಾಮರ ತಂತ್ರ ರಹಸ್ಯ",
    "sanskritLabel": "TANTRA",
    "price": 200,
    "imageUrl": "/images/books/daamara-tamtra-rahasya.webp",
    "category": "tantra-mantra",
    "description": "ಯಂತ್ರ ಮಂತ್ರ ಭೈರವ ಸಿದ್ದಿ ಯಕ್ಷ ಯಕ್ಷಣಿ ಸಾಧನೆ ಮಾಡುವ ಬಗ್ಗೆ ಮಹಾ ಚಂಡ ಕಾತ್ಯಾಯಿನಿ ಮಂತ್ರ ಸಾಧನೆ ಬಗ್ಗೆ ವಶೀಕರಣ ಪುರುಷ ವಶೀಕರಣ ಆಕರಶನ ಮೋಹನ ವಿದ್ವೇಶನ ಉಚ್ಚಾಟನ ಸ್ತಂಭನ ಡಾಮರ ಮಾರಣ ಕಾರಕ ರೋಗ ನಿವಾರಕದ ಬಗ್ಗೆ ವಿಸ್ತಾರವಾಗಿ ತಿಳಿಸಿದ್ದಾರೆ"
  },
  {
    "id": "item-212",
    "title": "ತಂತ್ರ ಕುಸುಮಾಂಜಲಿ",
    "sanskritLabel": "TANTRA",
    "price": 600,
    "imageUrl": "/images/books/tamtra-kusumaamjali.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-147",
    "title": "ತಂತ್ರ ಸಾಧನ ರಹಸ್ಯ",
    "sanskritLabel": "TANTRA",
    "price": 300,
    "imageUrl": "/images/books/tamtra-saadhana-rahasya.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-200",
    "title": "ತಂತ್ರದ ಮೂಲಕ ಮನೋಕಾಮನೆಗಳ ಪ್ರಾಪ್ತಿ",
    "sanskritLabel": "TANTRA",
    "price": 220,
    "imageUrl": "/images/books/tamtrada-moolaka-manokaamanegala-praapti.webp",
    "category": "tantra-mantra",
    "description": "ಯಂತ್ರಗಳು ತಂತ್ರಗಳು ತಂತ್ರ ಎಂದರೇನು? ತಂತ್ರದ ವಿಚಾರಗಳು ದೇವಿಯ ಯಂತ್ರಗಳು ದಶಮಾವಿದ್ಯ ಸಿದ್ಧಿಯ ಬಗ್ಗೆ ರಕ್ಷಣೆಯ ಬಗ್ಗೆ ಗಾಯಿತ್ರಿ ಮಂತ್ರ ಸಿದ್ಧಿಯ ಬಗ್ಗೆ ವಿಭಿನ್ನ ಪ್ರಭಾವಶಾಲಿ ಮಂತ್ರಗಳ ಬಗ್ಗೆ ಸಂಪೂರ್ಣವಾಗಿ ಇದರಲ್ಲಿ ತಿಳಿಸಲಾಗಿದೆ"
  },
  {
    "id": "item-107",
    "title": "ತಾರಾ ಪ್ರತ್ಯಂಗಿರಾ ಯಂತ್ರ ಮಂತ್ರ ತಂತ್ರ",
    "sanskritLabel": "TANTRA",
    "price": 400,
    "imageUrl": "/images/books/taaraa-pratyamgiraa-yamtra-mamtra-tamtra.webp",
    "category": "tantra-mantra",
    "description": "ತಾರಾದೇವಿಯ ಬಗ್ಗೆ ವೈಜ್ಞಾನಿಕವಾಗಿ ತಾರಾದೇವಿ ಆರಾಧನೆ ಧ್ಯಾನ ಕವಚ ಯಂತ್ರ ಮಂತ್ರ ತಂತ್ರಗಳು ಪ್ರತ್ಯಂಗಿರಾ ದೇವಿಯ ಆರಾಧನೆ ಬಗ್ಗೆ ಸಂಪೂರ್ಣವಾಗಿ ಕೊಟ್ಟಿದ್ದಾರೆ"
  },
  {
    "id": "item-115",
    "title": "ತಾರಾ ಪ್ರತ್ಯಂಗಿರಾ ಯಂತ್ರ ಮಂತ್ರ ತಂತ್ರ",
    "sanskritLabel": "TANTRA",
    "price": 400,
    "imageUrl": "/images/books/taaraa-pratyamgiraa-yamtra-mamtra-tamtra-2.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-179",
    "title": "ನಿರ್ವಾಣ ತಂತ್ರಮ್",
    "sanskritLabel": "TANTRA",
    "price": 500,
    "imageUrl": "/images/books/nirvaana-tamtram.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-195",
    "title": "ಪ್ರಾಚೀನ ಅಸಲಿ ಇಂದ್ರಜಾಲ ಮಹೇಂದ್ರಜಾಲ ವಿದ್ಯೆ",
    "sanskritLabel": "TANTRA",
    "price": 230,
    "imageUrl": "/images/books/praacheena-asali-imdrajaala-mahemdrajaala-vidye.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-141",
    "title": "ಬಟುಕಭೈರವ ತಂತ್ರಕಲ್ಪಹ",
    "sanskritLabel": "TANTRA",
    "price": 170,
    "imageUrl": "/images/books/batukabhairava-tamtrakalpaha.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-119",
    "title": "ಬೃಹತ್ ಭೈರವ ತಂತ್ರ",
    "sanskritLabel": "TANTRA",
    "price": 1200,
    "imageUrl": "/images/books/brihat-bhairava-tamtra.webp",
    "category": "tantra-mantra",
    "description": "ಬೃಹತ್ ಭೈರವ ತಂತ್ರ ಯಂತ್ರಸಾದನೆ ರಹಸ್ಯ ತಂತ್ರಸಾದನೆ ಭೈರವನ ಆರಾಧನೆ ಮಾಡಲು ಭೈರವನ ಪೂಜೆ ಮಾಡಲು ಭೈರವನ ಬಗ್ಗೆ ಯಥೇಚ್ಛವಾಗಿ ತಿಳಿದುಕೊಳ್ಳಲು ಭೈರವನ ಉಪಾಸನೆ ಮಾಡಿಕೊಳ್ಳುವವರಿಗೆ ತುಂಬಾ ಅತ್ಯುತ್ತಮವಾದಂತ ಗ್ರಂಥ ಇದರಲ್ಲಿ ಭೈರವ ಯಂತ್ರ ಮಂತ್ರ ತಂತ್ರಗಳು ಇವೆ"
  },
  {
    "id": "item-213",
    "title": "ಬೃಹತ್ ಭೈರವ ತಂತ್ರ",
    "sanskritLabel": "TANTRA",
    "price": 120,
    "imageUrl": "/images/books/brihat-bhairava-tamtra-2.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-185",
    "title": "ಮಂತ್ರ ಮಂಜರಿ",
    "sanskritLabel": "TANTRA",
    "price": 195,
    "imageUrl": "/images/books/mamtra-mamjari.webp",
    "category": "tantra-mantra",
    "description": "ಎಲ್ಲಾ ದೇವರ ಮಂತ್ರಗಳು ಹಾಗೂ ಎಲ್ಲಾ ಸೂಕ್ತಗಳು ಇರುವಂತ ಒಂದು ಗ್ರಂಥ ತುಂಬಾ ಚೆನ್ನಾಗಿದೆ ಮಂತ್ರಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಕೊಟ್ಟಿದ್ದಾರೆ"
  },
  {
    "id": "item-94",
    "title": "ಮಂತ್ರಗಳ ಚಮತ್ಕಾರ",
    "sanskritLabel": "TANTRA",
    "price": 200,
    "imageUrl": "/images/books/mamtragala-chamatkaara.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-20",
    "title": "ಮನೆಗೊಬ್ಬ ಮಾಂತ್ರಿಕ",
    "sanskritLabel": "TANTRA",
    "price": 550,
    "imageUrl": "/images/books/manegobba-maamtrika.webp",
    "category": "tantra-mantra",
    "description": "ಈ ಮನೆಗೊಬ್ಬ ಮಾಂತ್ರಿಕ ಎಂಬ ಪುಸ್ತಕದಲ್ಲಿ ಯಂತ್ರ ಮಂತ್ರ ತಂತ್ರ ಆಧಾರಿತ ದುರ್ಬಲ ಚಮತ್ಕಾರಿ ಪ್ರಯೋಗಗಳನ್ನು ಹೊಂದಿದೆ ದಿಗ್ಬಂಧನ ರೋಗ ನಿವಾರಣ ಸ್ತಂಭನ ಉಚ್ಛಾಟನಾ ಹಲವಾರು ಯಂತ್ರಗಳು ವಶೀಕರಣ ಪ್ರಯೋಗ ಪ್ರೇತವಾದ ನಿವಾರಣ ನೌಕರಿ ಪ್ರಾಪ್ತಿಗಾಗಿ ದಾರಿದ್ರ ನಾಶಕ್ಕೆ ಯಂತ್ರ ಇನ್ನೂ ಹಲವಾರು ರೀತಿಯ ಉಪಯೋಗಕ್ಕಾಗಿ ಈ ಪುಸ್ತಕ ಇದೆ"
  },
  {
    "id": "item-71",
    "title": "ಮಲಯಾಳ ಯಂತ್ರ ಮಂತ್ರ ತಂತ್ರ",
    "sanskritLabel": "TANTRA",
    "price": 200,
    "imageUrl": "/images/books/malayaala-yamtra-mamtra-tamtra.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-131",
    "title": "ಮಲಯಾಳ ಯಂತ್ರ ಮಂತ್ರ ತಂತ್ರ",
    "sanskritLabel": "TANTRA",
    "price": 200,
    "imageUrl": "/images/books/malayaala-yamtra-mamtra-tamtra-2.webp",
    "category": "tantra-mantra",
    "description": "ಆಕರ್ಷಣ ಮೋಹನ ಸ್ತಂಭನ ಉಚ್ಛಾಟನ ಮಾರಣ ವಶೀಕರಣ ಇತ್ಯಾದಿ ಕ್ರಿಯೆಗಳನ್ನ ಮಾಡಲು ಅದ್ಭುತವಾದ ಯಂತ್ರಗಳು ಮಂತ್ರಗಳು ತಂತ್ರದ ಜೊತೆಗೆ ಇರುವಂತಹ ಒಂದು ಸುಂದರ ಗ್ರಂಥ ಮಲಯಾಳ ಯಂತ್ರ ಮಂತ್ರ ತಂತ್ರ ಇದಾಗಿದೆ"
  },
  {
    "id": "item-162",
    "title": "ಮಹಾಪ್ರತ್ಯಂಗಿರಾ ಸಂಪುಟ",
    "sanskritLabel": "TANTRA",
    "price": 550,
    "imageUrl": "/images/books/mahaapratyamgiraa-samputa.webp",
    "category": "tantra-mantra",
    "description": "ಪ್ರತ್ಯಂಗಿರಾ ಹೋಮ ಪೂಜೆ ನ್ಯಾಸಗಳು ಯಂತ್ರಗಳು ಹಾಗೂ ಉಪಾಸನೆಯ ಬಗ್ಗೆ ಸಂಪೂರ್ಣವಾಗಿ ತಿಳಿಸಿಕೊಡಲಾಗಿದೆ"
  },
  {
    "id": "item-158",
    "title": "ಮೂಲಮಂತ್ರ ಪ್ರಯೋಗಃ",
    "sanskritLabel": "TANTRA",
    "price": 200,
    "imageUrl": "/images/books/moolamamtra-prayogah.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-133",
    "title": "ಯಂತ್ರ ಕಟ್ಟು",
    "sanskritLabel": "TANTRA",
    "price": 150,
    "imageUrl": "/images/books/yamtra-kattu.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-161",
    "title": "ಯಂತ್ರ ಚಿಂತಾಮಣಿ",
    "sanskritLabel": "TANTRA",
    "price": 150,
    "imageUrl": "/images/books/yamtra-chimtaamani.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-52",
    "title": "ಯಂತ್ರ ಮಂತ್ರ ಆಂಜನೇಯ ತಂತ್ರ",
    "sanskritLabel": "TANTRA",
    "price": 270,
    "imageUrl": "/images/books/yamtra-mamtra-aamjaneya-tamtra.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-145",
    "title": "ಯಂತ್ರ ಮಂತ್ರ ಆಂಜನೇಯ ತಂತ್ರ",
    "sanskritLabel": "TANTRA",
    "price": 270,
    "imageUrl": "/images/books/yamtra-mamtra-aamjaneya-tamtra-2.webp",
    "category": "tantra-mantra",
    "description": "ಆಂಜನೇಯ ಸ್ವಾಮಿಯ ಯಂತ್ರ ಮಂತ್ರ ತಂತ್ರ ವಿದ್ಯೆಯಿಂದ ನಿಮ್ಮ ಎಲ್ಲಾ ಸಮಸ್ಯೆಗಳಿಗೆ ಶೀಘ್ರ ಪರಿಹಾರ ಆಗುವಂತೆ ಈ ಗ್ರಂಥದಲ್ಲಿ ಸುಲಭವಾಗಿ"
  },
  {
    "id": "item",
    "title": "ಯಕ್ಷಿಣಿ ಸಂಪುಟ",
    "sanskritLabel": "TANTRA",
    "price": 170,
    "imageUrl": "/images/books/yakshini-samputa.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-142",
    "title": "ರೂಢಿಗತ ವಾಮಾಚಾರ ಪ್ರಯೋಗ",
    "sanskritLabel": "TANTRA",
    "price": 350,
    "imageUrl": "/images/books/roodhigata-vaamaachaara-prayoga.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-3",
    "title": "ವಾಮಕೇಶ್ವರಿ ತಂತ್ರ",
    "sanskritLabel": "TANTRA",
    "price": 110,
    "imageUrl": "/images/books/vaamakeshvari-tamtra.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "1-2-2",
    "title": "ವಿಜ್ಞಾನ ಭೈರವ ತಂತ್ರ ಭಾಗ 1 ಮತ್ತು 2",
    "sanskritLabel": "TANTRA",
    "price": 1800,
    "imageUrl": "/images/books/vijnyaana-bhairava-tamtra-bhaaga-1-mattu-2.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-35",
    "title": "ಶಾಬರ ಮಂತ್ರ ಪ್ರಯೋಗ",
    "sanskritLabel": "TANTRA",
    "price": 300,
    "imageUrl": "/images/books/shaabara-mamtra-prayoga.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-187",
    "title": "ಶಾರದಾ ತಿಲಕ",
    "sanskritLabel": "TANTRA",
    "price": 1200,
    "imageUrl": "/images/books/shaaradaa-tilaka.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-25",
    "title": "ಶೀಘ್ರ ಫಲದಾಯಕ ಪುರಾತನ ಮಂತ್ರ ರಹಸ್ಯ",
    "sanskritLabel": "TANTRA",
    "price": 150,
    "imageUrl": "/images/books/sheeghra-phaladaayaka-puraatana-mamtra-rahasya.webp",
    "category": "tantra-mantra",
    "description": "ಗಣೇಶ ಮಂತ್ರ ಸಿದ್ಧಿ ಭೈರವ ಮಂತ್ರ ಸಿದ್ಧಿ ಹನುಮಾನ್ ಸಾಧನೆ ಸಕಲ ಶತ್ರು ದೋಷ ನಿವಾರಣೆಗೆ ಸಾಧನೆಯ ರಕ್ಷಾ ಕವಚ ರಕ್ಷಾ ಯಂತ್ರಗಳು ಪ್ರತ್ಯಂಗಿರಾ ದೇವಿ ಮೃತ್ಯು ನಾಶಕ ಯಂತ್ರಗಳು ಯೋಗಿಣಿ ಸಾಧನೆ ಕುಬೇರ ಯಕ್ಷಣಿ ಹಾಗೂ ಇನ್ನು ಹಲವಾರು ಯಂತ್ರ ಮಂತ್ರ ಸಾಧನೆಗಳ ಬಗ್ಗೆ ವಿಸ್ತಾರವಾಗಿ ಕೊಟ್ಟಿದ್ದಾರೆ"
  },
  {
    "id": "item-167",
    "title": "ಶೀಘ್ರ ಫಲದಾಯಕ ಪುರಾತನ ಮಂತ್ರ ರಹಸ್ಯ",
    "sanskritLabel": "TANTRA",
    "price": 150,
    "imageUrl": "/images/books/sheeghra-phaladaayaka-puraatana-mamtra-rahasya-2.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-157",
    "title": "ಶ್ರೀ ದತ್ತಾತ್ರೇಯ ತಂತ್ರ",
    "sanskritLabel": "TANTRA",
    "price": 120,
    "imageUrl": "/images/books/shree-dattaatreya-tamtra.webp",
    "category": "tantra-mantra",
    "description": "ಸರ್ವ ರೀತಿಯ ಉಪಕಾರಿಯಾದಂತ ಮಂತ್ರಗಳು ಪ್ರಯೋಗಗಳು ಮಾರಣ ವಶೀಕರಣ ಸ್ಮ್ಬನ ವಿದ್ವೇಶನ ದೃಷ್ಟಿ ಸ್ತಂಭನ ಆಕರ್ಷಣ ಶರೀರ ಲಕ್ಷಣ ತಾರಾ ದರ್ಶನ ಸೂರ್ಯತ ದರ್ಶನ ಜಯ ಮತ್ತು ವಿಜಯ ವರ್ಣ ರಕ್ಷಣೆ ಸಾಧನ ಯಕ್ಷರಾಜ ನಿವೇದನ ಕುಬೇರ ಪ್ರಯೋಗ ಇತ್ಯಾದಿ ತಂತ್ರ ಸಾಧನ ರಹಸ್ಯಗಳ ಬಗ್ಗೆ ವಿಸ್ತಾರವಾಗಿ ಕೊಟ್ಟಿದ್ದಾರೆ"
  },
  {
    "id": "item-69",
    "title": "ಶ್ರೀ ದತ್ತಾತ್ರೇಯ ಮಂತ್ರ",
    "sanskritLabel": "TANTRA",
    "price": 120,
    "imageUrl": "/images/books/shree-dattaatreya-mamtra.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-198",
    "title": "ಶ್ರೀ ದುರ್ಗಾ ಸಪ್ತಶತಿಯ ಮಂತ್ರ ಪ್ರಯೋಗ",
    "sanskritLabel": "TANTRA",
    "price": 200,
    "imageUrl": "/images/books/shree-durgaa-saptashatiya-mamtra-prayoga.webp",
    "category": "tantra-mantra",
    "description": "ಶ್ರೀ ದುರ್ಗಾ ಸಪ್ತಶತಿಯ ಮಂತ್ರ ಪ್ರಯೋಗ ಇದರಿಂದ ಆರೋಗ್ಯ ಆಯಸ್ಸು ಐಶ್ವರ್ಯ ಎಲ್ಲವನ್ನ ಪಡೆಯುವ ಬಗ್ಗೆ ಹಾಗೂ ದುರ್ಗಾ ಸಪ್ತಶತಿಯಲ್ಲಿ ಬರುವ ಮಂತ್ರಗಳನ್ನು ಉಪಯೋಗಿಸಿ ಇಷ್ಟಾರ್ಥ ಪದಗಳನ್ನು ಪಡೆದುಕೊಳ್ಳುವ ಬಗ್ಗೆ ಸಂಪೂರ್ಣವಾಗಿ ತಿಳಿಸಿದ್ದಾರೆ"
  },
  {
    "id": "item-203",
    "title": "ಶ್ರೀ ಬಾಲಾ ತಂತ್ರಂ",
    "sanskritLabel": "TANTRA",
    "price": 250,
    "imageUrl": "/images/books/shree-baalaa-tamtram.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-54",
    "title": "ಶ್ರೀ ಮಂತ್ರ ರಹಸ್ಯ",
    "sanskritLabel": "TANTRA",
    "price": 200,
    "imageUrl": "/images/books/shree-mamtra-rahasya.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-42",
    "title": "ಶ್ರೀ ರೇಣುಕಾ ಪರಶುರಾಮ ತಂತ್ರಂ",
    "sanskritLabel": "TANTRA",
    "price": 220,
    "imageUrl": "/images/books/shree-renukaa-parashuraama-tamtram.webp",
    "category": "tantra-mantra",
    "description": "ಶ್ರೀ ರೇಣುಕಾದೇವಿ ಶಬರಿ ಮಂತ್ರ ಪ್ರಯೋಗ ಡಾಮರೇಶ್ವರ ತಂತ್ರ ಪ್ರಯೋಗ ರೇಣುಕಾದೇವಿ ಖಡ್ಗಮಾಲಾ ರೇಣುಕಾ ಆರತಿ ಭಾರ್ಗವ ಕವಚ ಪರಶುರಾಮ ಸಹಸ್ರನಾಮ ಹೀಗೆ 184 ಪೆಟವನ್ನು ಹೊಂದಿರುವಂತಹ ಪುಸ್ತಕ ರೇಣುಕಾ ತಂತ್ರಂ ತುಂಬಾ ಅದ್ಭುತವಾಗಿದೆ"
  },
  {
    "id": "item-10",
    "title": "ಶ್ರೀ ವಿದ್ಯಾ",
    "sanskritLabel": "TANTRA",
    "price": 500,
    "imageUrl": "/images/books/shree-vidyaa.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-68",
    "title": "ಶ್ರೀ ವಿದ್ಯಾ ಮಂತ್ರ ಯಂತ್ರ ತಂತ್ರ ರಹಸ್ಯಗಳು",
    "sanskritLabel": "TANTRA",
    "price": 500,
    "imageUrl": "/images/books/shree-vidyaa-mamtra-yamtra-tamtra-rahasyagalu.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-116",
    "title": "ಶ್ರೀ ವಿದ್ಯಾ ಯಂತ್ರ ಮಂತ್ರ ತಂತ್ರ ರಹಸ್ಯ",
    "sanskritLabel": "TANTRA",
    "price": 500,
    "imageUrl": "/images/books/shree-vidyaa-yamtra-mamtra-tamtra-rahasya.webp",
    "category": "tantra-mantra",
    "description": "ಶ್ರೀ ವಿದ್ಯಾ ಮಂತ್ರ ಯಂತ್ರ ತಂತ್ರ ರಹಸ್ಯ ತೆಲುಗು ವಿನಿಂದ ಕನ್ನಡಕ್ಕೆ ಅನುವಾದವಾಗಿದೆ"
  },
  {
    "id": "item-39",
    "title": "ಶ್ರೀ ವಿದ್ಯಾ ಸಹಸ್ರಧಾರಾ",
    "sanskritLabel": "TANTRA",
    "price": 200,
    "imageUrl": "/images/books/shree-vidyaa-sahasradhaaraa.webp",
    "category": "tantra-mantra",
    "description": "ಗಣಪತಿ ಲಲಿತಾ ಬಾಲ ಶಾಮಲಾ ವಾರಾಹಿ ಲಕ್ಷ್ಮಿ ದುರ್ಗಾ ಶಕಂಬರಿ ಪ್ರತ್ಯಂಗಿರಾ ಅನ್ನಪೂರ್ಣ ಹಲವಾರು ಸಹಸ್ರನಾಮಗಳು ಹಾಗೂ ಹಲವಾರು ದೇವಿಯರ ಅಷ್ಟೋತ್ತರಗಳನ್ನ ಒಳಗೊಂಡಿದೆ"
  },
  {
    "id": "item-122",
    "title": "ಶ್ರೀ ವಿದ್ಯಾನುಸಂಧಾನ",
    "sanskritLabel": "TANTRA",
    "price": 80,
    "imageUrl": "/images/books/shree-vidyaanusamdhaana.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-79",
    "title": "ಶ್ರೀ ವಿದ್ಯಾಸಪರ್ಯ",
    "sanskritLabel": "TANTRA",
    "price": 700,
    "imageUrl": "/images/books/shree-vidyaasaparya.webp",
    "category": "tantra-mantra",
    "description": "ಶ್ರೀಚಕ್ರ ಪೂಜಾ ಪದ್ದತಿ ಶ್ರೀ ವಿದ್ಯೆಯಲ್ಲಿ ಎಲ್ಲಾ ರೀತಿಯ ಪೂಜೆಗಳನ್ನು ಮಾಡುವ ವಿಧಾನ ಮಂತ್ರ ದೀಕ್ಷೆ ಗುರುಲಕ್ಷಣ ದೀಕ್ಷಾ ಕ್ರಮಗಳು ಹಾಗೂ ಸಕಲ ದೇವತಾ ಪೂಜೆ ಮಂತ್ರ ತಂತ್ರಗಳನ್ನು ಇದರಲ್ಲಿ ಕೊಡಲಾಗಿದೆ"
  },
  {
    "id": "item-180",
    "title": "ಶ್ರೀಚಕ್ರ",
    "sanskritLabel": "TANTRA",
    "price": 50,
    "imageUrl": "/images/books/shreechakra.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-135",
    "title": "ಶ್ರೀಚಕ್ರ ದಶಮಹಾವಿದ್ಯಾ",
    "sanskritLabel": "TANTRA",
    "price": 999,
    "imageUrl": "/images/books/shreechakra-dashamahaavidyaa.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-44",
    "title": "ಶ್ರೀಚಕ್ರ ದಶಮಹಾವಿದ್ಯಾಃ",
    "sanskritLabel": "TANTRA",
    "price": 999,
    "imageUrl": "/images/books/shreechakra-dashamahaavidyaah.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-146",
    "title": "ಶ್ರೀಚಕ್ರ ನವಾವರಣ ವಿಧಿ",
    "sanskritLabel": "TANTRA",
    "price": 450,
    "imageUrl": "/images/books/shreechakra-navaavarana-vidhi.webp",
    "category": "tantra-mantra",
    "description": "ಶ್ರೀದೇವಿ ಕಡಗಮಾಲಾ ಹಾಗೂ ಶ್ರೀಚಕ್ರ ಲಘು ಪೂಜಾ ವಿಧಿ ಸಹಿತವಾಗಿ ಶ್ರೀಚಕ್ರ ನವಾವರಣ ಪೂಜೆ ಮಾಡುವ ವಿಧಾನವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಕೊಟ್ಟಿದ್ದಾರೆ"
  },
  {
    "id": "item-89",
    "title": "ಶ್ರೀಚಕ್ರ ಯಂತ್ರ ರಾಜ",
    "sanskritLabel": "TANTRA",
    "price": 550,
    "imageUrl": "/images/books/shreechakra-yamtra-raaja.webp",
    "category": "tantra-mantra",
    "description": "234 ಯಂತ್ರಗಳ ಬೃಹತ್ ಯಂತ್ರ ಕೋಶ ವಿವಾಹ ಉದ್ಯೋಗ ವ್ಯಾಜ್ಯ ಆಕರಕ್ಷಣೆ ಸೌಭಾಗ್ಯ ಪ್ರಾಪ್ತಿಗೆ ಮೃತ್ಯುಂಜಯ ಅಧಿಕಾರ ಧನಪ್ರಾಪ್ತಿ ಸಂತಾನ ಮಾಟ ಮಂತ್ರ ಹೀಗೆ ಹಲವಾರು ದೋಷಗಳಿಗೆ ಪರಿಹಾರವನ್ನು ಹೊಂದಿರುವಂತಹ ಪೂಜಾ ಯಂತ್ರ ಮತ್ತು ಧಾರಣ ಯಂತ್ರಗಳನ್ನು ಹೊಂದಿರುವ ಅದ್ಭುತ ಗ್ರಂಥ"
  },
  {
    "id": "item-111",
    "title": "ಶ್ರೀಚಕ್ರ-ಶ್ರೀಚಕ್ರೇಶ್ವರಿ",
    "sanskritLabel": "TANTRA",
    "price": 200,
    "imageUrl": "/images/books/shreechakra-shreechakreshvari.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-165",
    "title": "ಷೋಡಶ ನಿತ್ಯ ಯಂತ್ರ ಸಾಧನೆ",
    "sanskritLabel": "TANTRA",
    "price": 150,
    "imageUrl": "/images/books/shodasha-nitya-yamtra-saadhane.webp",
    "category": "tantra-mantra",
    "description": "ಷೋಡಶಾ ನಿತ್ಯ ಯಂತ್ರ ಸಾಧನೆ ಇನ್ನೂರ ಒಂದು ಮಹತ್ವಪೂರ್ಣವಾದಂತ ಅತ್ಯಂತ ಶಕ್ತಿಶಾಲಿಯಾದಂತ ಯಂತ್ರಗಳ ಪ್ರಭಾವ ಹೊಂದಿರುವಂತ ಪುಸ್ತಕ"
  },
  {
    "id": "item-59",
    "title": "ಸಕಲ ದೇವತಾ ಗಾಯಿತ್ರಿ ಮಂತ್ರಗಳು",
    "sanskritLabel": "TANTRA",
    "price": 200,
    "imageUrl": "/images/books/sakala-devataa-gaayitri-mamtragalu.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-74",
    "title": "ಸಟಟೀಕ ಮಂತ್ರ ಮಹೋದಧಿ",
    "sanskritLabel": "TANTRA",
    "price": 999,
    "imageUrl": "/images/books/satateeka-mamtra-mahodadhi.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "400",
    "title": "ಸಟಿಕಾ ಮಂತ್ರ ಮೊಹೋದದಿ 400 ವರ್ಷ ಪ್ರಾಚೀನ ಗ್ರಂಥ",
    "sanskritLabel": "TANTRA",
    "price": 999,
    "imageUrl": "/images/books/satikaa-mamtra-mohodadi-400-varsha-praacheena-gramtha.webp",
    "category": "tantra-mantra",
    "description": "ದಶಮಹಾ ವಿದ್ಯೆ ಮಂತ್ರ ತಂತ್ರ ವಿಧಾನ ಬಲಿ ವಿಧಾನ ಭೂತ ಶುದ್ದಿ ಪೀಠ ಮಂತ್ರ ಪೂಜಾ ಕ್ರಮ ಪುರಸ್ಚರನ ಹೋಮವಿಧಿ ಅಗ್ನಿ ಪೂಜೆ ಶಾಬರಿ ವಿದ್ಯೆ ಇನ್ನೂ ಹಲವಾರು ಮಂತ್ರ ಯಂತ್ರ ವಿದ್ಯೆ ಬಗ್ಗೆ ವಿಸ್ತಾರವಾಗಿ ಕೊಟ್ಟಿದ್ದಾರೆ"
  },
  {
    "id": "item-101",
    "title": "ಸಟೀಕ ಮಂತ್ರ ಮಹೋದಧಿ",
    "sanskritLabel": "TANTRA",
    "price": 999,
    "imageUrl": "/images/books/sateeka-mamtra-mahodadhi.webp",
    "category": "tantra-mantra",
    "description": "ದಶಮ ಮಹಾದೇವಿಯರಾದ ತಾರಾ ಕಾಳಿ ಚಿನ್ನಮಸ್ತಾದೇವಿ ಕಾಮಾಕ್ಯದೇವಿಕರಣ ಜ್ವಾಲಾ ಮಾಲಿನಿ ಬಾಲಾ ತ್ರಿಪುರ ಸುಂದರಿ ಪ್ರತ್ಯಂಗಿರಾ ಕ್ಷೇತ್ರಪಾಲ ವಾರ ದೇವಿ ಇನ್ನು ಹಲವಾರು ದೇವರ ಯಂತ್ರ ಮಂತ್ರ ತಂತ್ರ ಸಾಧನ ಪ್ರಯೋಗಗಳನ್ನು ವಿಸ್ತಾರವಾಗಿ ಕೊಟ್ಟಿದ್ದಾರೆ"
  },
  {
    "id": "item-102",
    "title": "ಸಟೀಕ ಮಂತ್ರಮಹೋದಧಿ",
    "sanskritLabel": "TANTRA",
    "price": 999,
    "imageUrl": "/images/books/sateeka-mamtramahodadhi.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-77",
    "title": "ಸುಲೇಮಾನಿ ಯಂತ್ರ ಮಂತ್ರ ತಂತ್ರ",
    "sanskritLabel": "TANTRA",
    "price": 200,
    "imageUrl": "/images/books/sulemaani-yamtra-mamtra-tamtra.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-208",
    "title": "ಸುಲೇಮಾನಿ ಯಂತ್ರ ಮಂತ್ರ ತಂತ್ರ",
    "sanskritLabel": "TANTRA",
    "price": 200,
    "imageUrl": "/images/books/sulemaani-yamtra-mamtra-tamtra-2.webp",
    "category": "tantra-mantra",
    "description": "ಸುಲೇಮಾನಿ ಯಂತ್ರ ಮಂತ್ರ ತಂತ್ರ ಎಂಬ ಗ್ರಂಥದಲ್ಲಿ 256 ಯಂತ್ರಗಳ ಬೃಹತ್ ಸಂಗ್ರಹ ಸರಳ ಪರಿಹಾರಗಳನ್ನ ಕೊಟ್ಟಿದ್ದಾರೆ"
  },
  {
    "id": "item-23",
    "title": "ಹನುಮಾನ್ ಯಂತ್ರ ಮಂತ್ರ ತಂತ್ರ",
    "sanskritLabel": "TANTRA",
    "price": 150,
    "imageUrl": "/images/books/hanumaan-yamtra-mamtra-tamtra.webp",
    "category": "tantra-mantra",
    "description": ""
  },
  {
    "id": "item-9",
    "title": "ಆಶ್ಲೇಷ ಬಲಿ ಸರ್ಪ ಬಲಿ ಕಾಳ ಸರ್ಪಯೋಗ ಶಾಂತಿ",
    "sanskritLabel": "SHANTI",
    "price": 90,
    "imageUrl": "/images/books/aashlesha-bali-sarpa-bali-kaala-sarpayoga-shaamti.webp",
    "category": "remedies-shanti",
    "description": ""
  },
  {
    "id": "item-129",
    "title": "ಕರ್ಮ ವಿಪಾಕ ಸಂಹಿತಾ",
    "sanskritLabel": "SHANTI",
    "price": 300,
    "imageUrl": "/images/books/karma-vipaaka-samhitaa.webp",
    "category": "remedies-shanti",
    "description": ""
  },
  {
    "id": "item-202",
    "title": "ಕುಜ ದೋಷ ವಿವೇಚನೆ",
    "sanskritLabel": "SHANTI",
    "price": 200,
    "imageUrl": "/images/books/kuja-dosha-vivechane.webp",
    "category": "remedies-shanti",
    "description": ""
  },
  {
    "id": "item-72",
    "title": "ಜಾತಕ ಪರಿಹಾರ",
    "sanskritLabel": "SHANTI",
    "price": 450,
    "imageUrl": "/images/books/jaataka-parihaara.webp",
    "category": "remedies-shanti",
    "description": ""
  },
  {
    "id": "item-134",
    "title": "ನವಗ್ರಹ ಶಾಂತಿ ಕಲ್ಪ",
    "sanskritLabel": "SHANTI",
    "price": 250,
    "imageUrl": "/images/books/navagraha-shaamti-kalpa.webp",
    "category": "remedies-shanti",
    "description": ""
  },
  {
    "id": "item-13",
    "title": "ಪಿತೃ ದೋಷ ಕಾರಣ ಪರಿಹಾರ",
    "sanskritLabel": "SHANTI",
    "price": 70,
    "imageUrl": "/images/books/pitri-dosha-kaarana-parihaara.webp",
    "category": "remedies-shanti",
    "description": ""
  },
  {
    "id": "item-186",
    "title": "ಶಾಪ ದೋಷ ಪರಿಹಾರ ಪ್ರಕಾಶ",
    "sanskritLabel": "SHANTI",
    "price": 200,
    "imageUrl": "/images/books/shaapa-dosha-parihaara-prakaasha.webp",
    "category": "remedies-shanti",
    "description": ""
  },
  {
    "id": "item-194",
    "title": "ಸಪ್ರಯೋಗ ಶಾಂತಿ ಚಂದ್ರಿಕಾ",
    "sanskritLabel": "SHANTI",
    "price": 450,
    "imageUrl": "/images/books/saprayoga-shaamti-chamdrikaa.webp",
    "category": "remedies-shanti",
    "description": ""
  },
  {
    "id": "item-87",
    "title": "ಅಥರ್ವಣ ವೇದ",
    "sanskritLabel": "SAMHITA",
    "price": 1950,
    "imageUrl": "/images/books/atharvana-veda.webp",
    "category": "vedas-agamas",
    "description": "ಅಥರ್ವಣ ವೇದ ಅದರ ವಿಸ್ತಾರವಾದಂತ ಗ್ರಂಥಗಳು ಆರು ಪುಸ್ತಕಗಳು ತುಂಬಾ ವಿಸ್ತಾರವಾಗಿ ಮಂತ್ರ ಸಹಿತವಾಗಿ ಇದೆ"
  },
  {
    "id": "item-201",
    "title": "ಆಧುನಿಕ ಕಾಲಕ್ಕೆ ವೇದ ಜ್ಞಾನ",
    "sanskritLabel": "SAMHITA",
    "price": 100,
    "imageUrl": "/images/books/aadhunika-kaalakke-veda-jnyaana.webp",
    "category": "vedas-agamas",
    "description": ""
  },
  {
    "id": "item-36",
    "title": "ಋಗ್ವೇದ ದೇವತಾರ್ಚನ ವಿಧಿ:",
    "sanskritLabel": "SAMHITA",
    "price": 280,
    "imageUrl": "/images/books/rigveda-devataarchana-vidhi.webp",
    "category": "vedas-agamas",
    "description": "ವರ್ಷದಲ್ಲಿ ಬರುವಂತ ಎಲ್ಲಾ ಹಬ್ಬಗಳ ಮಂತ್ರಗಳ ವಿವರಣೆಯೊಂದಿಗೆ ಸಂಪೂರ್ಣ ನವಗ್ರಹ ಪೂಜೆ ಸೂಕ್ತಗಳು ಹಾಗೂ ನವಗ್ರಹ ಶಾಂತಿ ಪೂಜೆಗಳನ್ನ ಮಾಡಲು"
  },
  {
    "id": "item-170",
    "title": "ಋಗ್ವೇದ ಪ್ರಯೋಗ ದೀಪಿಕಾ",
    "sanskritLabel": "SAMHITA",
    "price": 350,
    "imageUrl": "/images/books/rigveda-prayoga-deepikaa.webp",
    "category": "vedas-agamas",
    "description": ""
  },
  {
    "id": "14",
    "title": "ಋಗ್ವೇದ ಸಂಹಿತ 14 ಪುಸ್ತಕಗಳು",
    "sanskritLabel": "SAMHITA",
    "price": 5025,
    "imageUrl": "/images/books/rigveda-samhita-14-pustakagalu.webp",
    "category": "vedas-agamas",
    "description": "ಋಗ್ವೇದಕ್ಕೆ ಸಂಬಂಧಪಟ್ಟಂತಹ 14 ಪುಸ್ತಕಗಳು ಸಂಪೂರ್ಣ ಋಗ್ವೇದ ಮಂತ್ರಗಳನ್ನು ಹೊಂದಿದೆ ವಿಸ್ತಾರವಾಗಿ ತುಂಬಾ ಚೆನ್ನಾಗಿ ವಿವರಿಸಿ ಕೊಟ್ಟಿದ್ದಾರೆ"
  },
  {
    "id": "item-76",
    "title": "ಋಗ್ವೇದಿಯ ಪ್ರಯೋಗ ಸಂಪುಟ",
    "sanskritLabel": "SAMHITA",
    "price": 400,
    "imageUrl": "/images/books/rigvediya-prayoga-samputa.webp",
    "category": "vedas-agamas",
    "description": "ಗಣಪತಿ ಪೂಜೆ ಸ್ವಸ್ತಿವಾಚನ ನಾಂದೇ ಅಗ್ನಿ ಮೂಕ ಪ್ರಯೋಗ ಅಂಕುರಾರ್ಪಣ ಉದಕ ಶಾಂತಿ ಗರ್ಭದಾನ ಪ್ರಯೋಗ ಶೋಡ ಸಂಸ್ಕಾರಗಳ ಬಗ್ಗೆ ಪ್ರಯೋಗ ಸೂಕ್ತಗಳು ವಿಸ್ತಾರವಾಗಿ ಹಲವಾರು ವಿಚಾರಗಳನ್ನು ಕೊಟ್ಟಿದ್ದಾರೆ"
  },
  {
    "id": "item-99",
    "title": "ಋಗ್ವೇದಿಯ ಸೂಕ್ತ ಸೌರಭ",
    "sanskritLabel": "SAMHITA",
    "price": 200,
    "imageUrl": "/images/books/rigvediya-sookta-saurabha.webp",
    "category": "vedas-agamas",
    "description": ""
  },
  {
    "id": "item-61",
    "title": "ಯಜುರ್ವೇದ ಉಪಾಕರ್ಮ ಪ್ರಯೋಗಃ",
    "sanskritLabel": "SAMHITA",
    "price": 125,
    "imageUrl": "/images/books/yajurveda-upaakarma-prayogah.webp",
    "category": "vedas-agamas",
    "description": ""
  },
  {
    "id": "4",
    "title": "ಯಜುರ್ವೇದ ತೈತರಿಯ ಸಂಹಿತೆ 4 ಪುಸ್ತಕಗಳು",
    "sanskritLabel": "SAMHITA",
    "price": 1300,
    "imageUrl": "/images/books/yajurveda-taitariya-samhite-4-pustakagalu.webp",
    "category": "vedas-agamas",
    "description": "ಯಜುರ್ವೇದ ತೈತರಿಯ 4 ಪುಸ್ತಕಗಳು ಎದುರು ವೇದದ ಬಗ್ಗೆ ಅಧ್ಯಯನ ಮಾಡಲು ತುಂಬಾ ಸುಂದರವಾಗಿದೆ"
  },
  {
    "id": "item-84",
    "title": "ಯಜುರ್ವೇದಿಯ ಉಪಕರ್ಮ ಪ್ರಯೋಗ ವಿಧಾನಮ್",
    "sanskritLabel": "SAMHITA",
    "price": 150,
    "imageUrl": "/images/books/yajurvediya-upakarma-prayoga-vidhaanam.webp",
    "category": "vedas-agamas",
    "description": ""
  },
  {
    "id": "item-190",
    "title": "ಯಜುರ್ವೇದಿಯ ಪಿತೃಮೇದಿಕ ಪ್ರಯೋಗ",
    "sanskritLabel": "SAMHITA",
    "price": 150,
    "imageUrl": "/images/books/yajurvediya-pitrimedika-prayoga.webp",
    "category": "vedas-agamas",
    "description": "ಪ್ರಥಮ ದಿನದಿಂದ ಆರಂಭವಾಗಿ 14 ದಿನಗಳವರೆಗೂ ಮಾಡುವಂತಹ ಪಿತೃ ಕಾರ್ಯಗಳ ಪ್ರಯೋಗದ ತಂತ್ರ ಸಹಿತವಾಗಿ ಮಂತ್ರ ಮತ್ತು ವಿಧಾನವನ್ನು ತುಂಬ ವಿಸ್ತಾರವಾಗಿ ಬರೆಯಲಾಗಿದೆ"
  },
  {
    "id": "item-65",
    "title": "ಯಜುರ್ವೇದೀಯ ಪಿತೃಮೇಧಿಕ ಪ್ರಯೋಗಃ",
    "sanskritLabel": "SAMHITA",
    "price": 1500,
    "imageUrl": "/images/books/yajurvedeeya-pitrimedhika-prayogah.webp",
    "category": "vedas-agamas",
    "description": ""
  },
  {
    "id": "item-118",
    "title": "ಯಜುರ್ವೇದೀಯ ಪಿತೃಮೇಧಿಕ ಪ್ರಯೋಗಃ",
    "sanskritLabel": "SAMHITA",
    "price": 1500,
    "imageUrl": "/images/books/yajurvedeeya-pitrimedhika-prayogah-2.webp",
    "category": "vedas-agamas",
    "description": ""
  },
  {
    "id": "item-83",
    "title": "ಯಾಜುಷ ಪ್ರಯೋಗ ರತ್ನಮಾಲಾ",
    "sanskritLabel": "SAMHITA",
    "price": 280,
    "imageUrl": "/images/books/yaajusha-prayoga-ratnamaalaa.webp",
    "category": "vedas-agamas",
    "description": ""
  },
  {
    "id": "item-53",
    "title": "ಯಾಜುಷ ಸೂಕ್ತ ಸೌರಭ",
    "sanskritLabel": "SAMHITA",
    "price": 200,
    "imageUrl": "/images/books/yaajusha-sookta-saurabha.webp",
    "category": "vedas-agamas",
    "description": ""
  },
  {
    "id": "item-16",
    "title": "ವೇದ ವಸಂತ",
    "sanskritLabel": "SAMHITA",
    "price": 81,
    "imageUrl": "/images/books/veda-vasamta.webp",
    "category": "vedas-agamas",
    "description": ""
  },
  {
    "id": "item-75",
    "title": "ವೇದ ಸಂವತ್ಸರ",
    "sanskritLabel": "SAMHITA",
    "price": 400,
    "imageUrl": "/images/books/veda-samvatsara.webp",
    "category": "vedas-agamas",
    "description": ""
  },
  {
    "id": "item-166",
    "title": "ಶೈವಾಗಮಾನುಸಾರ ನಿತ್ಯಾರ್ಚನವಿಧಿ",
    "sanskritLabel": "SAMHITA",
    "price": 150,
    "imageUrl": "/images/books/shaivaagamaanusaara-nityaarchanavidhi.webp",
    "category": "vedas-agamas",
    "description": ""
  },
  {
    "id": "item-33",
    "title": "ಸಾಮವೇದ ಪೂರ್ವ ಮತ್ತು ಉತ್ತರಾರ್ಚಿಕ ಎರಡು ಪುಸ್ತಕಗಳು",
    "sanskritLabel": "SAMHITA",
    "price": 900,
    "imageUrl": "/images/books/saamaveda-poorva-mattu-uttaraarchika-eradu-pustakagalu.webp",
    "category": "vedas-agamas",
    "description": "ಸಾಮವೇದ ಅಧ್ಯಯನ ಮಾಡಲು ಎರಡು ಪುಸ್ತಕಗಳು"
  },
  {
    "id": "item-216",
    "title": "ಅಗ್ನಿಮುಖ ಪ್ರಕಾಶ",
    "sanskritLabel": "HAVANA",
    "price": 175,
    "imageUrl": "/images/books/agnimukha-prakaasha.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-56",
    "title": "ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ",
    "sanskritLabel": "HAVANA",
    "price": 70,
    "imageUrl": "/images/books/agnimukha-prayoga.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-46",
    "title": "ಆಶ್ಲೇಷ ಕಲ್ಪ",
    "sanskritLabel": "HAVANA",
    "price": 225,
    "imageUrl": "/images/books/aashlesha-kalpa.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-26",
    "title": "ಆಶ್ವಾಲಯನ ಪೈತೃಮೇದಿಕ ಮೇದಿಕೆ ಪ್ರಯೋಗ",
    "sanskritLabel": "HAVANA",
    "price": 150,
    "imageUrl": "/images/books/aashvaalayana-paitrimedika-medike-prayoga.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-81",
    "title": "ಉತ್ಸವ ತರಂಗಿಣಿ",
    "sanskritLabel": "HAVANA",
    "price": 400,
    "imageUrl": "/images/books/utsava-taramgini.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-60",
    "title": "ಕಲ್ಯಾಣೋತ್ಸವ ಕೌಮುದಿ",
    "sanskritLabel": "HAVANA",
    "price": 90,
    "imageUrl": "/images/books/kalyaanotsava-kaumudi.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-93",
    "title": "ಕಲ್ಯಾಣೋತ್ಸವ ದೀಪಿಕಾ",
    "sanskritLabel": "HAVANA",
    "price": 400,
    "imageUrl": "/images/books/kalyaanotsava-deepikaa.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-197",
    "title": "ಕಾಮ್ಯ ಪ್ರಕಾಶ",
    "sanskritLabel": "HAVANA",
    "price": 400,
    "imageUrl": "/images/books/kaamya-prakaasha.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-169",
    "title": "ದೀಪ ಸಂಪುಟ",
    "sanskritLabel": "HAVANA",
    "price": 150,
    "imageUrl": "/images/books/deepa-samputa.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-214",
    "title": "ದೇವತಾರ್ಚನ ವಿಧಿಹಿ",
    "sanskritLabel": "HAVANA",
    "price": 150,
    "imageUrl": "/images/books/devataarchana-vidhihi.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-51",
    "title": "ದೇವಪ್ರತಿಷ್ಟಾ ಚೂಡಾವಣಿ",
    "sanskritLabel": "HAVANA",
    "price": 550,
    "imageUrl": "/images/books/devapratishtaa-choodaavani.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-103",
    "title": "ದೇವಪ್ರತಿಷ್ಠಾ ಚೂಡಾಮಣಿ",
    "sanskritLabel": "HAVANA",
    "price": 550,
    "imageUrl": "/images/books/devapratishthaa-choodaamani.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-62",
    "title": "ನಿತ್ಯ ಪಂಚಾಯತನ ದೇವತಾರ್ಚನ ವಿಸ್ತರಣೀಯಮ್",
    "sanskritLabel": "HAVANA",
    "price": 350,
    "imageUrl": "/images/books/nitya-pamchaayatana-devataarchana-vistaraneeyam.webp",
    "category": "pooja-homa",
    "description": "244 ಪುಟಗಳ ಡಾಕ್ಟರ್ ಎಸ್ ರಾಮಮೂರ್ತಿ ಶರ್ಮಾ ಅವರ ಮಹಾನ್್ಯಾಸ ಲಘುನ್ಯಾಸ ಪಂಚ ಸೂಕ್ತ ದೀಪಾರಾಧನ ಲಘು ಅಷ್ಟಮದನ ಸೇವಾ ಸಹಿತಂ"
  },
  {
    "id": "item-55",
    "title": "ನಿತ್ಯ ಪೂಜಾ ವಿಧಿ",
    "sanskritLabel": "HAVANA",
    "price": 50,
    "imageUrl": "/images/books/nitya-poojaa-vidhi.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-183",
    "title": "ನಿತ್ಯ ಸಂಸ್ಕಾರ",
    "sanskritLabel": "HAVANA",
    "price": 170,
    "imageUrl": "/images/books/nitya-samskaara.webp",
    "category": "pooja-homa",
    "description": "ನಾವು ನಿತ್ಯ ಈ ಆಧುನಿಕ ಯುಗದಲ್ಲಿ ಉಪಯುಕ್ತವೆನಿಸುವಂತಹ ಹಲವಾರು ಶಾಸ್ತ್ರ ಸಿದ್ಧವಾದಂತ ಸಂಸ್ಕಾರಗಳು ನಾವು ಮರೆತಿರುವಂಥ ಒಂದಷ್ಟು ಸಂಸ್ಕಾರಗಳನ್ನ ಸಂಪೂರ್ಣವಾಗಿ ತಿಳಿಸಿಕೊಟ್ಟಿದ್ದಾರೆ"
  },
  {
    "id": "item-22",
    "title": "ಪಂಚ ದುರ್ಗಾ ದೀಪ ನಮಸ್ಕಾರ ವಿಧಿ",
    "sanskritLabel": "HAVANA",
    "price": 200,
    "imageUrl": "/images/books/pamcha-durgaa-deepa-namaskaara-vidhi.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-49",
    "title": "ಪುರಾಣೋಕ್ತ ಪ್ರಯೋಗ ಸಂಗ್ರಹ:",
    "sanskritLabel": "HAVANA",
    "price": 220,
    "imageUrl": "/images/books/puraanokta-prayoga-samgraha.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-86",
    "title": "ಪೂಜಾಹೋಮಕಲ್ಪದ್ರುಮಃ",
    "sanskritLabel": "HAVANA",
    "price": 300,
    "imageUrl": "/images/books/poojaahomakalpadrumah.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-164",
    "title": "ಪ್ರಯೋಗ ಸಂಪುಟ",
    "sanskritLabel": "HAVANA",
    "price": 400,
    "imageUrl": "/images/books/prayoga-samputa.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-191",
    "title": "ಮಂಡಲ ದರ್ಪಣ",
    "sanskritLabel": "HAVANA",
    "price": 220,
    "imageUrl": "/images/books/mamdala-darpana.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-80",
    "title": "ರುದ್ರಷ್ಟಾಧ್ಯಾಯಿ",
    "sanskritLabel": "HAVANA",
    "price": 330,
    "imageUrl": "/images/books/rudrashtaadhyaayi.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-92",
    "title": "ವಟುಕ ಭೈರವ ಉಪಾಸನೆ",
    "sanskritLabel": "HAVANA",
    "price": 600,
    "imageUrl": "/images/books/vatuka-bhairava-upaasane.webp",
    "category": "pooja-homa",
    "description": "ಭೈರವ ಉಪಾಸನೆ ಮಾಡಲು ಹೋಮ ಮಾಡಲು ಯಂತ್ರ ಭೈರವ ಪೂಜೆ ಯಂತ್ರ ನ್ಯಾಸಗಳು ಹಾಗೂ ಭೈರವನ ಬಗ್ಗೆ ಸಂಪೂರ್ಣವಾದ ಮಾಹಿತಿಯನ್ನು ತಿಳಿಯಲು ಪುಸ್ತಕ ತುಂಬಾ ಅದ್ಭುತವಾಗಿದೆ"
  },
  {
    "id": "item-182",
    "title": "ವಾಂಚ ಕಲ್ಪ ಲತಾ",
    "sanskritLabel": "HAVANA",
    "price": 200,
    "imageUrl": "/images/books/vaamcha-kalpa-lataa.webp",
    "category": "pooja-homa",
    "description": "ಧ್ಯಾನ ಚತುರ್ಥ ಪರ್ಯಾಯ ವಾಂಚ ಕಲ್ಪ ಲತಾ ಪ್ರಯೋಗ ಮಂತ್ರೋದ್ಧಾರ ತುರಿಯ ಸಂಧ್ಯಾ ವಿಧಿ ಲಕ್ಷ್ಮಿ ಸ್ತವರಾಜ ಇತ್ಯಾದಿ ವಿಚಾರಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿಯನ್ನು ಕೊಟ್ಟಿದ್ದಾರೆ"
  },
  {
    "id": "item-177",
    "title": "ವ್ರತ ಮಾಲಾ",
    "sanskritLabel": "HAVANA",
    "price": 475,
    "imageUrl": "/images/books/vrata-maalaa.webp",
    "category": "pooja-homa",
    "description": "ಇದರಲ್ಲಿ ವ್ರತಗಳು ಪೂಜೆಗಳು ನವಗ್ರಹ ಸ್ತೋತ್ರ ಕವಚ ಅಷ್ಟೋತ್ತರಗಳು ಪ್ರತಿಗ್ರಹದ್ದು ಹಾಗೂ ಪ್ರದೋಷ ಪೂಜೆ ವ್ರತ ಲಲಿತಾ ತ್ರಿಶತಿ ಸಹಸ್ರನಾಮ ಅಷ್ಟೋತ್ತರ ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ ವಿಷ್ಣು ಸಹಸ್ರನಾಮ ಕನ್ನಿಕಾಪರಮೇಶ್ವರಿ ಅಷ್ಟೋತ್ತರ ಮಂತ್ರ ಪುಷ್ಪ ಮೀನಾಕ್ಷಿ ಪಂಚಸ್ತೋತ್ರ ಫಲ ಗೌರಿ ವ್ರತ ಹೀಗೆ ಹಲವಾರು ವಿಚಾರವನ್ನು ತಿಳಿಸಿದ್ದಾರೆ"
  },
  {
    "id": "item-104",
    "title": "ವ್ರತರತ್ನಂ",
    "sanskritLabel": "HAVANA",
    "price": 100,
    "imageUrl": "/images/books/vrataratnam.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-106",
    "title": "ಶ್ರೀ ಅಷ್ಟ ವಿನಾಯಕ ಉಪಾಸನ ಸರ್ವಸ್ವಂ",
    "sanskritLabel": "HAVANA",
    "price": 350,
    "imageUrl": "/images/books/shree-ashta-vinaayaka-upaasana-sarvasvam.webp",
    "category": "pooja-homa",
    "description": "ವಕ್ರತುಂಡ, ಏಕದಂತ,ಮಹೋಧರ, ಗಜಾನನ, ಲಂಬೋದರ, ವಿಕಟ, ವಿಘ್ನ ರಾಜ, ಧೂಮ್ರವರಣ, ಹೀಗೆ ಎಂಟು ವಿಧದ ಗಣಪತಿಯ ಬಗ್ಗೆ ಸ್ತೋತ್ರ ಮಂತ್ರ ಸ್ತುತಿ ಗೀತಾ ಧ್ಯಾನ ಅಷ್ಟೋತ್ತರ ಪೂಜಾ ವಿಧಾನ ಹೋಮ ವಿಧಾನವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಕೊಟ್ಟಿದ್ದಾರೆ"
  },
  {
    "id": "item-48",
    "title": "ಶ್ರೀ ಉಚ್ಚಿಷ್ಟ ಮಹಾಗಣಪತಿ ವರಿವಸ್ಯಾ",
    "sanskritLabel": "HAVANA",
    "price": 100,
    "imageUrl": "/images/books/shree-uchchishta-mahaaganapati-varivasyaa.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-189",
    "title": "ಶ್ರೀ ಚಂಡಿ ಹೋಮ ಪ್ರಯೋಗ",
    "sanskritLabel": "HAVANA",
    "price": 400,
    "imageUrl": "/images/books/shree-chamdi-homa-prayoga.webp",
    "category": "pooja-homa",
    "description": "ಚಂಡಿ ಹೋಮ ಪ್ರಯೋಗ ಮಾಡುವವರು ಪಾರಾಯಣ ಮಾಡುವವರು ಸಂಪೂರ್ಣ ಯಾವ ದಿನದಲ್ಲಿ ಏನು ಮಾಡಬೇಕು ಎಂಬ ವಿಧಾನವನ್ನು ಒಳಗೊಂಡಿರುವಂತಹ ಮಂತ್ರ ಸಹಿತವಾಗಿರುವಂತ ಅದ್ಭುತ ಗ್ರಂಥ"
  },
  {
    "id": "item-132",
    "title": "ಶ್ರೀ ದುರ್ಗಾ ಪೂಜಾ ದೀಪಾ ನಮಸ್ಕಾರ ಹೋಮ ವಿಧಿ",
    "sanskritLabel": "HAVANA",
    "price": 70,
    "imageUrl": "/images/books/shree-durgaa-poojaa-deepaa-namaskaara-homa-vidhi.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-50",
    "title": "ಶ್ರೀ ನಾಂದಿ ಪ್ರಯೋಗ ವಿಧಾನಮ್",
    "sanskritLabel": "HAVANA",
    "price": 330,
    "imageUrl": "/images/books/shree-naamdi-prayoga-vidhaanam.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-11",
    "title": "ಶ್ರೀ ಬಾಲ ಸಪರ್ಯ",
    "sanskritLabel": "HAVANA",
    "price": 200,
    "imageUrl": "/images/books/shree-baala-saparya.webp",
    "category": "pooja-homa",
    "description": "ಶ್ರೀ ಬಾಲ ಸುಪರ್ಯ ಗಣಪತಿ ಕ್ರಮ ಆವರಣ ಪೂಜಾ ಸ್ತೋತ್ರ ಸಹಸ್ರನಾಮ ಹಾಗೂ ಶ್ರೀ ಬಾಲ ಮಂತ್ರ ಪೂಜಾ ವಿಧಾನದ ಬಗ್ಗೆ ಸಂಪೂರ್ಣವಾಗಿ ತಿಳಿಸಿದ್ದಾರೆ"
  },
  {
    "id": "item-188",
    "title": "ಶ್ರೀ ಭೈರವ ದಿಗ್ಬಂಧನ ಪ್ರಯೋಗ",
    "sanskritLabel": "HAVANA",
    "price": 220,
    "imageUrl": "/images/books/shree-bhairava-digbamdhana-prayoga.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-24",
    "title": "ಶ್ರೀ ಭೈರವ ದಿಗ್ಬಂಧನಾ ಪ್ರಯೋಗ",
    "sanskritLabel": "HAVANA",
    "price": 220,
    "imageUrl": "/images/books/shree-bhairava-digbamdhanaa-prayoga.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-120",
    "title": "ಶ್ರೀ ಮಂಗಳ ಗೌರಿ ವ್ರತ, ಕಥೆ",
    "sanskritLabel": "HAVANA",
    "price": 40,
    "imageUrl": "/images/books/shree-mamgala-gauri-vrata-kathe.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-34",
    "title": "ಶ್ರೀ ರುದ್ರಹೋಮಪ್ರಯೋಗಃ",
    "sanskritLabel": "HAVANA",
    "price": 120,
    "imageUrl": "/images/books/shree-rudrahomaprayogah.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-154",
    "title": "ಶ್ರೀ ಸತ್ಯ ಗಣಪತಿ ವ್ರತ ವಿಧಿ",
    "sanskritLabel": "HAVANA",
    "price": 165,
    "imageUrl": "/images/books/shree-satya-ganapati-vrata-vidhi.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-108",
    "title": "ಶ್ರೀ ಸತ್ಯನಾರಾಯಣ ಪೂಜಾ ವಿಧಿ",
    "sanskritLabel": "HAVANA",
    "price": 135,
    "imageUrl": "/images/books/shree-satyanaaraayana-poojaa-vidhi.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-125",
    "title": "ಶ್ರೀ ಹನುಮಾನ್ ಪ್ರತಿಷ್ಠಾ ಪ್ರಯೋಗ:",
    "sanskritLabel": "HAVANA",
    "price": 300,
    "imageUrl": "/images/books/shree-hanumaan-pratishthaa-prayoga.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-150",
    "title": "ಶ್ರೀಅಷ್ಟ ವಿನಾಯಕ ಉಪಾಸನಸರ್ವಸ್ವಮ್",
    "sanskritLabel": "HAVANA",
    "price": 350,
    "imageUrl": "/images/books/shreeashta-vinaayaka-upaasanasarvasvam.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-206",
    "title": "ಶ್ರೀಕೃಷ್ಣವ್ರತಕಲ್ಪೋಕ್ತಪೂಜಾ",
    "sanskritLabel": "HAVANA",
    "price": 90,
    "imageUrl": "/images/books/shreekrishnavratakalpoktapoojaa.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-78",
    "title": "ಸಟೀಕಾ ವ್ರತರತ್ನಂ",
    "sanskritLabel": "HAVANA",
    "price": 550,
    "imageUrl": "/images/books/sateekaa-vrataratnam.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-29",
    "title": "ಸ್ವಸ್ತಿ ಪುಣ್ಯ ಹವಾಚನ ಮತ್ತು ನವಗ್ರಹ ಪೂಜಾ ವಿಧಿ",
    "sanskritLabel": "HAVANA",
    "price": 100,
    "imageUrl": "/images/books/svasti-punya-havaachana-mattu-navagraha-poojaa-vidhi.webp",
    "category": "pooja-homa",
    "description": ""
  },
  {
    "id": "item-21",
    "title": "ಹೋಮ ಸಂಪುಟ",
    "sanskritLabel": "HAVANA",
    "price": 500,
    "imageUrl": "/images/books/homa-samputa.webp",
    "category": "pooja-homa",
    "description": "ಹೋಮ ಸಂಪುಟದಲ್ಲಿ 30 ರೀತಿಯ ಹೋಮವನ್ನು ಮಾಡುವ ವಿಧಾನಗಳು ಮಂತ್ರಗಳು ಹಾಗೂ ಅಷ್ಟೋತ್ತರಗಳನ್ನ ಸಂಪೂರ್ಣವಾಗಿ ತಿಳಿಸಿಕೊಟ್ಟಿದ್ದಾರೆ"
  },
  {
    "id": "item-207",
    "title": "ಅಂಬಿಕಾ ವಿಜಯ",
    "sanskritLabel": "VEDANTA",
    "price": 600,
    "imageUrl": "/images/books/ambikaa-vijaya.webp",
    "category": "puranas-upanishads",
    "description": ""
  },
  {
    "id": "item-174",
    "title": "ದಿನಕ್ಕೊಂದು ಪ್ರಾರ್ಥನೆ",
    "sanskritLabel": "VEDANTA",
    "price": 250,
    "imageUrl": "/images/books/dinakkomdu-praarthane.webp",
    "category": "puranas-upanishads",
    "description": ""
  },
  {
    "id": "item-181",
    "title": "ಪದ್ಮಪುರಾಣ",
    "sanskritLabel": "VEDANTA",
    "price": 300,
    "imageUrl": "/images/books/padmapuraana.webp",
    "category": "puranas-upanishads",
    "description": ""
  },
  {
    "id": "item-127",
    "title": "ಬೃಹತ್ ಸ್ತೋತ್ರ ರತ್ನಾಕರ",
    "sanskritLabel": "VEDANTA",
    "price": 350,
    "imageUrl": "/images/books/brihat-stotra-ratnaakara.webp",
    "category": "puranas-upanishads",
    "description": ""
  },
  {
    "id": "item-117",
    "title": "ಲಘು ದೇವಿ ಮಹಾತ್ಮೆ",
    "sanskritLabel": "VEDANTA",
    "price": 80,
    "imageUrl": "/images/books/laghu-devi-mahaatme.webp",
    "category": "puranas-upanishads",
    "description": ""
  },
  {
    "id": "item-28",
    "title": "ಶ್ರೀ ಗಣೇಶ ಪುರಾಣ",
    "sanskritLabel": "VEDANTA",
    "price": 300,
    "imageUrl": "/images/books/shree-ganesha-puraana.webp",
    "category": "puranas-upanishads",
    "description": ""
  },
  {
    "id": "item-156",
    "title": "ಶ್ರೀ ಚಕ್ರ ರೂಪಿಣಿ ಶೃಂಗ ಗಿರಿ ದೇವಿ ಶ್ರೀ ಶಾರದಾಂಬ ವೈಭವ",
    "sanskritLabel": "VEDANTA",
    "price": 150,
    "imageUrl": "/images/books/shree-chakra-roopini-shrimga-giri-devi-shree-shaaradaamba-vaibhava.webp",
    "category": "puranas-upanishads",
    "description": "ಶಾರದಾಂಬೆ ವೈಭವ ಶಾರದಾ ದೇವಿಯ ಮಹಾತ್ಮೆ ಶ್ರೀಚಕ್ರ ನವಭರಣ ಉಪಾಸನ ಚಕ್ರ ಧ್ಯಾನ ಇದರ ಬಗ್ಗೆ ಮಾಹಿತಿಯನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಕೊಟ್ಟಿದ್ದಾರೆ"
  },
  {
    "id": "item-159",
    "title": "ಶ್ರೀ ವಿಷ್ಣು ಪುರಾಣಂ",
    "sanskritLabel": "VEDANTA",
    "price": 300,
    "imageUrl": "/images/books/shree-vishnu-puraanam.webp",
    "category": "puranas-upanishads",
    "description": ""
  },
  {
    "id": "item-40",
    "title": "ಶ್ರೀ ಶ್ರೀನಿವಾಸ ಕಲ್ಯಾಣಮ್",
    "sanskritLabel": "VEDANTA",
    "price": 650,
    "imageUrl": "/images/books/shree-shreenivaasa-kalyaanam.webp",
    "category": "puranas-upanishads",
    "description": ""
  },
  {
    "id": "item-192",
    "title": "ಶ್ರೀದೇವಿ ಮಹಾತ್ಮೆ",
    "sanskritLabel": "VEDANTA",
    "price": 90,
    "imageUrl": "/images/books/shreedevi-mahaatme.webp",
    "category": "puranas-upanishads",
    "description": ""
  },
  {
    "id": "item-88",
    "title": "ಸೌಂದರ್ಯ ಲಹರಿ ಸ್ತೋತ್ರ ದರ್ಪಣ",
    "sanskritLabel": "VEDANTA",
    "price": 150,
    "imageUrl": "/images/books/saumdarya-lahari-stotra-darpana.webp",
    "category": "puranas-upanishads",
    "description": ""
  },
  {
    "id": "item-19",
    "title": "ಸೌಂದರ್ಯಲಹರೀ ಸ್ತೋತ್ರದೀಪಿಕೆ",
    "sanskritLabel": "VEDANTA",
    "price": 400,
    "imageUrl": "/images/books/saumdaryalaharee-stotradeepike.webp",
    "category": "puranas-upanishads",
    "description": ""
  },
  {
    "id": "item-215",
    "title": "ಆಯುರ್ವೇದ ಮತ್ತು ಪದಾರ್ಥ ವಿಜ್ಞಾನ",
    "sanskritLabel": "ADHYATMA",
    "price": 600,
    "imageUrl": "/images/books/aayurveda-mattu-padaartha-vijnyaana.webp",
    "category": "yoga-ayurveda",
    "description": ""
  },
  {
    "id": "item-97",
    "title": "ಗೋರಕ್ಷಾ ಶತಕ",
    "sanskritLabel": "ADHYATMA",
    "price": 90,
    "imageUrl": "/images/books/gorakshaa-shataka.webp",
    "category": "yoga-ayurveda",
    "description": ""
  },
  {
    "id": "item-144",
    "title": "ಚರಕ ಸಂಹಿತೆ",
    "sanskritLabel": "ADHYATMA",
    "price": 1300,
    "imageUrl": "/images/books/charaka-samhite.webp",
    "category": "yoga-ayurveda",
    "description": ""
  },
  {
    "id": "item-109",
    "title": "ಜ್ಞಾನ ಸಿಂಧು ನೀಲಿ ಹೊತ್ತಿಗೆ ಗ್ರಂಥ",
    "sanskritLabel": "ADHYATMA",
    "price": 200,
    "imageUrl": "/images/books/jnyaana-simdhu-neeli-hottige-gramtha.webp",
    "category": "yoga-ayurveda",
    "description": "ಅಧಿಕಾರ ಲಕ್ಷಣ ತತ್ವ ನಿರ್ಣಯ ನಿಜಬಹುದಾ ಸಾಧನಾ ಚತುಷ್ಟಯ ಸಪ್ತ ಭೂಮಿಗೆಗಳು ಹಠಯೋಗ ನಿರ್ಣಯ ಅಟ ರಾಜಯೋಗ ಲಯ ಯೋಗ ಪರಬ್ರಹ್ಮ ಸ್ವರೂಪ ಜೀವತ್ರಯ ಶಾಂತಿ ಲಕ್ಷಣ ಸಾಧು ಲಕ್ಷಣ ಸತ್ಕರ್ಮ ಯೋಗ ಬಹು ಸಮಾಧಿ ಲಕ್ಷಣ ರಾಜ ಯೋಗಂಗ ಭಕ್ತಿ ಯೋಗ ಅವದೂತ ಚರಿತ್ರೆ ವಿಭೂತಿ ನಿರ್ಣಯ ಅದ್ವೈತವಸ್ತು ಹೀಗೆ ಹಲವಾರು ವಿಚಾರದ ಬಗ್ಗೆ ಸಂಪೂರ್ಣವಾದ ಮಾಹಿತಿಯನ್ನ ಕೊಟ್ಟಿದ್ದಾರೆ"
  },
  {
    "id": "item-140",
    "title": "ಜ್ಞಾನಸಿಂಧು",
    "sanskritLabel": "ADHYATMA",
    "price": 110,
    "imageUrl": "/images/books/jnyaanasimdhu.webp",
    "category": "yoga-ayurveda",
    "description": ""
  },
  {
    "id": "item-172",
    "title": "ಪತಂಜಲಿಯ ಯೋಗಸೂತ್ರ",
    "sanskritLabel": "ADHYATMA",
    "price": 150,
    "imageUrl": "/images/books/patamjaliya-yogasootra.webp",
    "category": "yoga-ayurveda",
    "description": ""
  },
  {
    "id": "item-15",
    "title": "ಪೂರ್ವಜನ್ಮ ಪುನರ್ಜನ್ಮ...!",
    "sanskritLabel": "ADHYATMA",
    "price": 450,
    "imageUrl": "/images/books/poorvajanma-punarjanma.webp",
    "category": "yoga-ayurveda",
    "description": ""
  },
  {
    "id": "item-138",
    "title": "ಯೋಗರತ್ನ ಮಂಜೂಷ",
    "sanskritLabel": "ADHYATMA",
    "price": 200,
    "imageUrl": "/images/books/yogaratna-mamjoosha.webp",
    "category": "yoga-ayurveda",
    "description": ""
  },
  {
    "id": "item-41",
    "title": "ಶಿವ ಯೋಗ ದೀಪಿಕಾ",
    "sanskritLabel": "ADHYATMA",
    "price": 180,
    "imageUrl": "/images/books/shiva-yoga-deepikaa.webp",
    "category": "yoga-ayurveda",
    "description": ""
  },
  {
    "id": "item-163",
    "title": "ಶಿವಯೋಗ ಪ್ರದೀಪಿಕಾ",
    "sanskritLabel": "ADHYATMA",
    "price": 90,
    "imageUrl": "/images/books/shivayoga-pradeepikaa.webp",
    "category": "yoga-ayurveda",
    "description": ""
  },
  {
    "id": "item-114",
    "title": "ಶಿವಸಂಹಿತೆ",
    "sanskritLabel": "ADHYATMA",
    "price": 300,
    "imageUrl": "/images/books/shivasamhite.webp",
    "category": "yoga-ayurveda",
    "description": ""
  },
  {
    "id": "item-205",
    "title": "ಸಟೀಕಾ ಜ್ಞಾನಸಿಂಧು",
    "sanskritLabel": "ADHYATMA",
    "price": 600,
    "imageUrl": "/images/books/sateekaa-jnyaanasimdhu.webp",
    "category": "yoga-ayurveda",
    "description": ""
  },
  {
    "id": "item-100",
    "title": "ಸ್ವಾತ್ಮರಾಮರ ಹಠಯೋಗ ಪ್ರದೀಪಿಕಾ",
    "sanskritLabel": "ADHYATMA",
    "price": 300,
    "imageUrl": "/images/books/svaatmaraamara-hathayoga-pradeepikaa.webp",
    "category": "yoga-ayurveda",
    "description": ""
  },
  {
    "id": "item-136",
    "title": "ಹಠ ಪ್ರದೀಪಿಕಾ ( ಬ್ರಹ್ಮಾನಂದರ ಟೀಕಾಸಾರ ಸಹಿತ )",
    "sanskritLabel": "ADHYATMA",
    "price": 150,
    "imageUrl": "/images/books/hatha-pradeepikaa-brahmaanamdara-teekaasaara-sahita.webp",
    "category": "yoga-ayurveda",
    "description": ""
  },
  {
    "id": "item-130",
    "title": "ಹಠಯೋಗ ರಾಜಯೋಗ ಮುಕ್ತಿಗೆ ಮಾರ್ಗ",
    "sanskritLabel": "ADHYATMA",
    "price": 400,
    "imageUrl": "/images/books/hathayoga-raajayoga-muktige-maarga.webp",
    "category": "yoga-ayurveda",
    "description": ""
  },
  {
    "id": "item-199",
    "title": "ಅಷ್ಟಾಧ್ಯಾಯೀ",
    "sanskritLabel": "DHARMA",
    "price": 240,
    "imageUrl": "/images/books/ashtaadhyaayee.webp",
    "category": "dharmashastra",
    "description": ""
  },
  {
    "id": "item-38",
    "title": "ಧರ್ಮಶಾಸ್ತ್ರ",
    "sanskritLabel": "DHARMA",
    "price": 500,
    "imageUrl": "/images/books/dharmashaastra.webp",
    "category": "dharmashastra",
    "description": ""
  },
  {
    "id": "item-82",
    "title": "ಧರ್ಮಸಿಂಧು",
    "sanskritLabel": "DHARMA",
    "price": 800,
    "imageUrl": "/images/books/dharmasimdhu.webp",
    "category": "dharmashastra",
    "description": ""
  },
  {
    "id": "item-8",
    "title": "ನಿರ್ಣಯ ಸಿಂಧು",
    "sanskritLabel": "DHARMA",
    "price": 1500,
    "imageUrl": "/images/books/nirnaya-simdhu.webp",
    "category": "dharmashastra",
    "description": ""
  },
  {
    "id": "item-139",
    "title": "ಮೇಘದೂತಮ್",
    "sanskritLabel": "DHARMA",
    "price": 125,
    "imageUrl": "/images/books/meghadootam.webp",
    "category": "dharmashastra",
    "description": ""
  },
  {
    "id": "item-67",
    "title": "ವಿವಾಹ ಪಂಚಕ",
    "sanskritLabel": "DHARMA",
    "price": 225,
    "imageUrl": "/images/books/vivaaha-pamchaka.webp",
    "category": "dharmashastra",
    "description": "ವಿವಾಹ ಪೂರ್ವದಲ್ಲಿ ಹುಡುಗ ಅಥವಾ ಹುಡುಗಿಯ ವಿಚಾರದಲ್ಲಿ ಯಾವುದಾದರೂ ದೋಷಗಳಿದ್ದರೆ ಮಾಡುವಂತಹ ಅರ್ಕ ವಿವಾಹ ರಂಭ ವಿವಾಹ ಕುಂಭ ವಿವಾಹ ಅಶ್ವತ ವಿವಾಹ ಮತ್ತು ತುಳಸಿ ವಿವಾಹದ ಬಗ್ಗೆ ಸಂಪೂರ್ಣವಾದ ಮಾಹಿತಿ ಮತ್ತು ಮಾಡುವಂತ ವಿಧಾನವನ್ನು ಇದರಲ್ಲಿ ತಿಳಿಸಲಾಗಿದೆ"
  },
  {
    "id": "item-47",
    "title": "ಶಾಲಗ್ರಾಮ ಪರೀಕ್ಷ",
    "sanskritLabel": "DHARMA",
    "price": 550,
    "imageUrl": "/images/books/shaalagraama-pareeksha.webp",
    "category": "dharmashastra",
    "description": "ಈ ಗ್ರಂಥದಲ್ಲಿ ಸಾಲಗ್ರಾಮ ಪರೀಕ್ಷೆ ಚಕ್ರಗಳ ಉದ್ದೇಶ ಹಲವಾರು ಸಾಲಿಗ್ರಾಮಗಳ ಲಕ್ಷಣಗಳು ಹಾಗೂ ಮೂರ್ತಿಗಳ ಬಗ್ಗೆ ವಿದ್ಯಮೂರ್ತಿ ಸಂಖ್ಯೆಗಳ ಬಗ್ಗೆ ಮಹಾತ್ಮೆಗಳ ಬಗ್ಗೆ ದಾನ ಫಲಗಳ ಬಗ್ಗೆ ಕೊಟ್ಟಿರುತ್ತಾರೆ"
  },
  {
    "id": "item-14",
    "title": "ಸಂಸ್ಕೃತ ಕನ್ನಡ ಶಬ್ದಾರ್ಥ ಕೋಶಮ್",
    "sanskritLabel": "DHARMA",
    "price": 1500,
    "imageUrl": "/images/books/samskrita-kannada-shabdaartha-kosham.webp",
    "category": "dharmashastra",
    "description": ""
  },
  {
    "id": "item-43",
    "title": "ಸರಳ ಸಂಸ್ಕೃತ ವ್ಯಾಕರಣ",
    "sanskritLabel": "DHARMA",
    "price": 200,
    "imageUrl": "/images/books/sarala-samskrita-vyaakarana.webp",
    "category": "dharmashastra",
    "description": ""
  },
  {
    "id": "item-63",
    "title": "ಸಹಸ್ರ ಸೂಕ್ತಿಗಳು",
    "sanskritLabel": "DHARMA",
    "price": 100,
    "imageUrl": "/images/books/sahasra-sooktigalu.webp",
    "category": "dharmashastra",
    "description": ""
  },
  {
    "id": "item-124",
    "title": "ಅರಿಶಿಣ ಮಾಲೆ",
    "sanskritLabel": "MANGALA",
    "price": 350,
    "imageUrl": "/images/books/arishina-maale.webp",
    "category": "sacred-articles",
    "description": "ಮಂಗಳಕಾರ್ಯ ನಡೆಯಲು ವಿವಾಹದಲ್ಲಿ ಅಡೆತಡೆಗಳಿಗಾಗಿ ಗ್ರಹಭಾದೇ ನಿವಾರಣೆಗಾಗಿ ವಿವಾಹಕ್ಕೆ ಸಂಬಂಧಪಟ್ಟಂತ ದೋಷ ನಿವಾರಣೆಗಾಗಿ ಇಂದ್ರ ವಿವಾಹ ಪ್ರಾಪ್ತಿಗಾಗಿ ಅರಿಶಿಣ ಮಾಲೆ ಪೂಜಿಸಿ ತರಿಸು ಕೊಳ್ಳುವುದು"
  },
  {
    "id": "item-196",
    "title": "ಕಾರಂಗುಲಿ ಮಾಲಾ",
    "sanskritLabel": "MANGALA",
    "price": 350,
    "imageUrl": "/images/books/kaaramguli-maalaa.webp",
    "category": "sacred-articles",
    "description": "ಶತ್ರುಭಾದೆ, ಕೆಟ್ಟ ದೃಷ್ಟಿ, ವಾಮಾಚಾರ ಪ್ರಯೋಗಗಳಿಂದ ಮುಕ್ತಿ ಹೊಂದಲು ಋಣಾತ್ಮಕವಾದ ಶಕ್ತಿಯಿಂದ ಆಗುವಂಥ ತೊಂದರೆಯಿಂದ ರಕ್ಷಣೆ ಮಾಡಿಕೊಳ್ಳಲು ಶಿವನ ಬಳಿ ಇಟ್ಟು ಪೂಜಿಸಲಾದ ಕರಂಗುಲಿ ಮಾಲ"
  },
  {
    "id": "6-mm",
    "title": "ರುದ್ರಾಕ್ಷಿ ಮಾಲಾ 6 mm",
    "sanskritLabel": "MANGALA",
    "price": 550,
    "imageUrl": "/images/books/rudraakshi-maalaa-6-mm.webp",
    "category": "sacred-articles",
    "description": "ಏಕಾಗ್ರತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಹಾಗೂ ಆಧ್ಯಾತ್ಮ ಶಕ್ತಿಯನ್ನು ಹೊಂದಲು ಶಿವನ ಅನುಗ್ರಹಕ್ಕಾಗಿ ಕೆಟ್ಟ ಆಲೋಚನೆಯಿಂದ ದೂರ ಇರಲು ಹಾಗೂ ಕೆಟ್ಟ ಶಕ್ತಿಗಳಿಂದ ರಕ್ಷಣೆ ಹೊಂದಲು ರುದ್ರಾಕ್ಷವಾದ ತುಂಬಾ ಅನುಕೂಲಕರವಾಗಿದೆ"
  },
  {
    "id": "item-173",
    "title": "ವೈಜಯಂತಿಮಾಲಾ",
    "sanskritLabel": "MANGALA",
    "price": 400,
    "imageUrl": "/images/books/vaijayamtimaalaa.webp",
    "category": "sacred-articles",
    "description": "ಮಹಾವಿಷ್ಣು ಹಾಗೂ ಕೃಷ್ಣನ ಅನುಗ್ರಕ್ಕಾಗಿ ಕೀರ್ತಿ ಯಶಸ್ಸು ಹಾಗೂ ಧನದ ಸಮೃದ್ಧಿಗಾಗಿ ಭಕ್ತಿ ಸಾತ್ವಿಕತೆ ಮತ್ತು ಯಶಸ್ವಿಗಾಗಿ ಮನೋಬಲ ಹೆಚ್ಚಾಗಿ ಆತ್ಮವಿಶ್ವಾಸ ದೃಢವಾಗಲು"
  }
];

export const api = axios.create({
  baseURL: import.meta.env?.API_URL || '/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.error || error.message || 'An error occurred';
    return Promise.reject(new Error(message));
  }
);

export default api;
