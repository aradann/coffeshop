/* ============================================================
   BrewHaven Coffee Shop — Application JavaScript
   ============================================================ */

'use strict';

/* ==================== Product Data ==================== */
const PRODUCTS = [
  /* ---- Coffee Beans ---- */
  {
    id: 'bean-001',
    name: 'Ethiopian Yirgacheffe',
    category: 'beans',
    price: 18.99,
    emoji: '☕',
    bgColor: '#5D3A2A',
    tag: 'Coffee Beans',
    tagClass: 'tag--bean',
    shortDesc: 'Bright, floral, and wonderfully complex — the crown jewel of Ethiopian specialty coffee.',
    description:
      'Our Ethiopian Yirgacheffe is sourced directly from small-holder farmers in the Gedeo Zone of southern Ethiopia. ' +
      'Hand-picked and wet-processed, the beans deliver an exceptionally clean cup with notes of jasmine, bergamot, and ripe blueberry. ' +
      'A silky body with a sparkling citrus finish makes this the ideal morning coffee for those who appreciate nuance.',
    history:
      'Coffee is believed to have originated in the Kaffa region of Ethiopia, where legend says a goat herder named Kaldi first observed the ' +
      'energising effect of coffee berries in the 9th century. Yirgacheffe — a small town at 1,700–2,200 m altitude — has been producing ' +
      'coffee since at least the 15th century. The unique combination of volcanic soil, ample rainfall, and cool temperatures creates the ' +
      'distinct terroir responsible for its celebrated floral and fruity character. Today it holds a protected origin designation and is among ' +
      'the most sought-after beans in the specialty market.',
    specs: [
      { key: 'Origin',    val: 'Ethiopia, Yirgacheffe' },
      { key: 'Process',   val: 'Washed' },
      { key: 'Altitude',  val: '1,700 – 2,200 m' },
      { key: 'Roast',     val: 'Light' },
      { key: 'Weight',    val: '250 g' },
      { key: 'Flavours',  val: 'Jasmine · Blueberry · Citrus' },
    ],
    sku: 'BH-BEAN-001',
  },
  {
    id: 'bean-002',
    name: 'Colombian Supremo',
    category: 'beans',
    price: 15.49,
    emoji: '🫘',
    bgColor: '#8B5E3C',
    tag: 'Coffee Beans',
    tagClass: 'tag--bean',
    shortDesc: 'Balanced and smooth — Colombia\'s most celebrated grade with caramel sweetness.',
    description:
      'Our Colombian Supremo is sourced from the Huila and Nariño departments — high-altitude volcanic highlands that produce beans with ' +
      'exceptional density and sweetness. The cup is well-balanced with flavours of milk chocolate, brown sugar, and a hint of walnut, ' +
      'with a clean, lingering finish. Perfect as filter coffee, Americano, or a classic drip brew.',
    history:
      'Coffee arrived in Colombia in the early 18th century, brought by Jesuit priests. By the 1800s it had become a major agricultural ' +
      'commodity and the backbone of the Colombian economy. The "Supremo" grade was established in the 20th century to denote beans ' +
      'that pass through a larger screen size (17–18), indicating superior ripeness and density. Colombia is today the world\'s third-largest ' +
      'coffee producer and the largest producer of washed arabica, with its iconic "Juan Valdez" campaign cementing the country\'s place ' +
      'in global coffee culture.',
    specs: [
      { key: 'Origin',    val: 'Colombia, Huila & Nariño' },
      { key: 'Process',   val: 'Washed' },
      { key: 'Altitude',  val: '1,500 – 2,000 m' },
      { key: 'Roast',     val: 'Medium' },
      { key: 'Weight',    val: '250 g' },
      { key: 'Flavours',  val: 'Chocolate · Caramel · Walnut' },
    ],
    sku: 'BH-BEAN-002',
  },
  {
    id: 'bean-003',
    name: 'Sumatra Mandheling',
    category: 'beans',
    price: 16.99,
    emoji: '🌱',
    bgColor: '#3E2A1A',
    tag: 'Coffee Beans',
    tagClass: 'tag--bean',
    shortDesc: 'Bold, earthy, and full-bodied — an iconic Indonesian single-origin.',
    description:
      'Grown on the slopes of the Bukit Barisan mountain range in North Sumatra, Mandheling beans are processed using the distinctive ' +
      '"wet-hulling" (Giling Basah) technique indigenous to Indonesia. The result is a heavy-bodied, low-acidity cup with earthy, ' +
      'forest-floor notes, dark chocolate, and a subtle smokiness. Ideal for espresso blending or a bold French press.',
    history:
      'Dutch colonists introduced coffee cultivation to Sumatra in the late 17th century. The term "Mandheling" does not refer to a place ' +
      'but to the Mandailing people — an ethnic group in North Sumatra — and was coined by a Japanese officer who asked a local farmer the ' +
      'name of the coffee; the farmer, misunderstanding the question, gave the name of his people. Despite the linguistic mix-up, the name ' +
      'stuck and today Mandheling is one of the most recognisable Indonesian coffees worldwide.',
    specs: [
      { key: 'Origin',    val: 'Sumatra, Indonesia' },
      { key: 'Process',   val: 'Wet-Hulled (Giling Basah)' },
      { key: 'Altitude',  val: '900 – 1,500 m' },
      { key: 'Roast',     val: 'Dark' },
      { key: 'Weight',    val: '250 g' },
      { key: 'Flavours',  val: 'Dark Chocolate · Earth · Smoke' },
    ],
    sku: 'BH-BEAN-003',
  },
  {
    id: 'bean-004',
    name: 'Guatemala Antigua',
    category: 'beans',
    price: 17.25,
    emoji: '🌄',
    bgColor: '#6B4226',
    tag: 'Coffee Beans',
    tagClass: 'tag--bean',
    shortDesc: 'Volcanic richness with spicy dark chocolate and a velvety mouthfeel.',
    description:
      'Grown in the Antigua Valley at 1,500–1,700 m, surrounded by three volcanoes that enrich the soil with mineral-laden ash, ' +
      'Antigua coffees are celebrated for their full body, bright acidity, and complex flavour profile. ' +
      'Our lot presents notes of dark chocolate, clove, and brown spice with a honey-sweet aftertaste.',
    history:
      'Guatemala began producing coffee commercially in the 1850s when German and other European immigrants established large coffee ' +
      'fincas in the highland valleys. Antigua, a UNESCO World Heritage city, became synonymous with premium Guatemalan coffee. The ' +
      'unique microclimate — warm days, cool nights, and rich volcanic soil — along with hand-picking and traditional wet processing, ' +
      'have made Antigua beans a benchmark for Central American specialty coffee.',
    specs: [
      { key: 'Origin',    val: 'Antigua, Guatemala' },
      { key: 'Process',   val: 'Washed' },
      { key: 'Altitude',  val: '1,500 – 1,700 m' },
      { key: 'Roast',     val: 'Medium-Dark' },
      { key: 'Weight',    val: '250 g' },
      { key: 'Flavours',  val: 'Dark Chocolate · Clove · Honey' },
    ],
    sku: 'BH-BEAN-004',
  },

  /* ---- Coffee Machines ---- */
  {
    id: 'machine-001',
    name: 'Barista Pro 3000',
    category: 'machines',
    price: 599.00,
    emoji: '🤖',
    bgColor: '#2C2C2C',
    tag: 'Coffee Machines',
    tagClass: 'tag--machine',
    shortDesc: 'Semi-automatic espresso machine with dual boiler and precision pressure profiling.',
    description:
      'The Barista Pro 3000 is designed for the home barista who demands professional results. Its dual stainless-steel boiler system ' +
      'allows simultaneous brewing and steaming, while the integrated PID controller maintains temperature accuracy to ±0.5 °C. ' +
      'The 58 mm commercial portafilter, pre-infusion stage, and programmable pressure profiling give you full control over extraction. ' +
      'Includes a high-powered steam wand for silky microfoam and an auto-purge function.',
    history:
      'The modern espresso machine traces its roots to Angelo Moriondo\'s 1884 Turin patent, designed to speed up coffee service. ' +
      'Luigi Bezzera refined it in 1901, and Desiderio Pavoni commercialised the design. The first practical home espresso machine ' +
      'appeared in the 1950s. Decades of engineering advances — from pump-driven systems to PID temperature control and digital pressure ' +
      'profiling — have brought café-quality espresso to home kitchens. The Barista Pro 3000 sits at the pinnacle of that evolution.',
    specs: [
      { key: 'Boiler',      val: 'Dual stainless steel' },
      { key: 'Pressure',    val: '9–15 bar (adjustable)' },
      { key: 'Portafilter', val: '58 mm commercial' },
      { key: 'Steam Wand',  val: 'Pro articulating' },
      { key: 'Colour',      val: 'Brushed stainless' },
      { key: 'Warranty',    val: '2 years' },
    ],
    sku: 'BH-MACH-001',
  },
  {
    id: 'machine-002',
    name: 'AeroFlow Filter Maker',
    category: 'machines',
    price: 129.95,
    emoji: '☕',
    bgColor: '#1A2C3E',
    tag: 'Coffee Machines',
    tagClass: 'tag--machine',
    shortDesc: 'Precision pour-over style drip machine with blooming mode and thermal carafe.',
    description:
      'The AeroFlow Filter Maker replicates the best aspects of hand-pour brewing with push-button convenience. ' +
      'An 800-watt element heats water to the ideal 96 °C before delivering a precise shower-head bloom, then a steady laminar pour. ' +
      'The double-walled thermal carafe keeps coffee hot for two hours without a hotplate, preserving delicate aromatics. ' +
      'Compatible with both flat-bottom and V60-style filters.',
    history:
      'Drip coffee makers were patented as early as 1908 by Melitta Bentz in Germany, who punched holes in a tin can and lined it with ' +
      'blotting paper. The first automatic electric drip machine, Mr. Coffee, was introduced in the US in 1972 and rapidly ' +
      'transformed American coffee culture. The specialty coffee movement of the 2000s and 2010s placed renewed focus on brew ' +
      'temperature, bloom time, and even extraction — principles the AeroFlow embeds into automated brewing.',
    specs: [
      { key: 'Capacity',   val: '1.2 L (10 cups)' },
      { key: 'Power',      val: '800 W' },
      { key: 'Brew Temp',  val: '92 – 96 °C (programmable)' },
      { key: 'Carafe',     val: 'Double-wall thermal' },
      { key: 'Timer',      val: '24-hr programmable' },
      { key: 'Warranty',   val: '2 years' },
    ],
    sku: 'BH-MACH-002',
  },
  {
    id: 'machine-003',
    name: 'PodPress Capsule One',
    category: 'machines',
    price: 89.00,
    emoji: '🧃',
    bgColor: '#2E4A3E',
    tag: 'Coffee Machines',
    tagClass: 'tag--machine',
    shortDesc: 'Versatile capsule machine compatible with Nespresso® Original pods and refillable caps.',
    description:
      'The PodPress Capsule One brings effortless single-serve brewing to any countertop. A 19-bar pump, rapid heat-up (< 25 sec), ' +
      'and intuitive one-touch controls make it the ideal weekday morning companion. ' +
      'Compatible with Nespresso® Original-format capsules and our own refillable stainless capsules, letting you brew any ground coffee you choose. ' +
      'Features an energy-saving auto-off after 9 minutes.',
    history:
      'Nespresso patented the capsule system in 1976, but it was only launched commercially in 1986 — initially targeting offices, ' +
      'then expanding to households after a 2000 relaunch. Third-party compatibility became legally possible in most markets after key ' +
      'patents expired between 2011 and 2013, sparking a wave of compatible machines and refillable capsules. ' +
      'The PodPress honours that open ecosystem, giving you all the convenience of a capsule machine with complete freedom of coffee choice.',
    specs: [
      { key: 'Pump',       val: '19 bar' },
      { key: 'Heat-up',    val: '< 25 seconds' },
      { key: 'Tank',       val: '1.0 L removable' },
      { key: 'Compatible', val: 'Nespresso® Original + refillable' },
      { key: 'Auto-off',   val: '9 minutes' },
      { key: 'Warranty',   val: '1 year' },
    ],
    sku: 'BH-MACH-003',
  },
  {
    id: 'machine-004',
    name: 'FrenchMaster Press',
    category: 'machines',
    price: 44.99,
    emoji: '🫖',
    bgColor: '#3A1A1A',
    tag: 'Coffee Machines',
    tagClass: 'tag--machine',
    shortDesc: 'Premium double-wall glass French press with heat-retaining borosilicate body.',
    description:
      'The FrenchMaster Press elevates the French press experience with a double-wall borosilicate glass carafe that keeps your brew ' +
      'at the perfect temperature up to twice as long as single-wall designs. A stainless-steel mesh plunger with a micro-filtration ' +
      'screen delivers a sediment-free, full-bodied cup. The ergonomic handle and non-slip base make for effortless daily use.',
    history:
      'The French press (cafetière) was patented in Italy in 1929 by Attilio Calimani. Early designs used a flat mesh filter — an ' +
      'idea already described by a French patent in 1852. The modern design evolved through refinements by Faliero Bondanini in 1958. ' +
      'Despite its simplicity, the French press is celebrated by coffee connoisseurs for producing an oil-rich, full-bodied brew that ' +
      'paper filters cannot match. It remains one of the most popular manual brewing methods worldwide.',
    specs: [
      { key: 'Capacity',  val: '1.0 L (8 cups)' },
      { key: 'Material',  val: 'Double-wall borosilicate glass' },
      { key: 'Filter',    val: 'Stainless micro-mesh' },
      { key: 'Heat',      val: 'Retains heat 2× standard' },
      { key: 'Dishwash',  val: 'Safe (carafe & plunger)' },
      { key: 'Warranty',  val: '1 year' },
    ],
    sku: 'BH-MACH-004',
  },

  /* ---- Misc ---- */
  {
    id: 'misc-001',
    name: 'Signature Blend Ground',
    category: 'misc',
    price: 12.99,
    emoji: '🟤',
    bgColor: '#6B3E26',
    tag: 'Misc',
    tagClass: 'tag--misc',
    shortDesc: 'Our house pre-ground blend — rich, balanced, and ready for any brew method.',
    description:
      'BrewHaven\'s Signature Blend is our best-selling house roast, ground to a versatile medium grind suitable for drip, Moka pot, ' +
      'Aeropress, and filter. The blend combines 60% Colombian Supremo for body and sweetness with 40% Brazilian Santos for ' +
      'nutty depth. Pre-ground in a nitrogen-flushed, resealable pouch to lock in freshness.',
    history:
      'Pre-ground coffee became commercially widespread in the early 20th century, with brands like Folgers (founded 1850) and ' +
      'Maxwell House (1892) pioneering vacuum-sealed cans to preserve freshness during shelf storage. The introduction of nitrogen ' +
      'flushing in the 1980s dramatically extended shelf life and flavour preservation. While whole-bean is preferred by purists, ' +
      'quality pre-ground coffee in sealed packaging remains the most accessible entry point for great home brewing.',
    specs: [
      { key: 'Blend',    val: '60% Colombia · 40% Brazil' },
      { key: 'Grind',    val: 'Medium (versatile)' },
      { key: 'Roast',    val: 'Medium' },
      { key: 'Weight',   val: '200 g' },
      { key: 'Packaging',val: 'Nitrogen-flush resealable' },
      { key: 'Best By',  val: '9 months from roast date' },
    ],
    sku: 'BH-MISC-001',
  },
  {
    id: 'misc-002',
    name: 'Artisan Ceramic Mug Set',
    category: 'misc',
    price: 34.00,
    emoji: '🍵',
    bgColor: '#4A5568',
    tag: 'Misc',
    tagClass: 'tag--misc',
    shortDesc: 'Set of 2 hand-thrown ceramic mugs — each uniquely glazed, 350 ml.',
    description:
      'Each mug in this set is individually thrown on a potter\'s wheel and finished with our exclusive reactive glaze that produces ' +
      'a one-of-a-kind pattern in the kiln. The generous 350 ml capacity is perfect for a cappuccino, long black, or morning tea. ' +
      'The thick walls retain heat beautifully, and the ergonomic handle fits comfortably in the hand. Microwave and dishwasher safe.',
    history:
      'Stoneware ceramics have been used for drinking vessels for over 10,000 years. The first purpose-built coffee cups appeared in ' +
      'Ottoman culture in the 15th–16th centuries — small, handleless fincan bowls served in copper holders. The European-style ' +
      'handled mug emerged in the 18th century as coffee houses spread across the continent. Artisan hand-throwing as a craft ' +
      'experienced a major revival in the 1970s Studio Pottery movement and continues to thrive in specialty coffee culture.',
    specs: [
      { key: 'Quantity',  val: '2 mugs per set' },
      { key: 'Capacity',  val: '350 ml each' },
      { key: 'Material',  val: 'High-fire stoneware' },
      { key: 'Glaze',     val: 'Reactive (unique pattern)' },
      { key: 'Safe',      val: 'Microwave & dishwasher safe' },
      { key: 'Made In',   val: 'Handmade in Portugal' },
    ],
    sku: 'BH-MISC-002',
  },
  {
    id: 'misc-003',
    name: 'Precision Coffee Scale',
    category: 'misc',
    price: 49.99,
    emoji: '⚖️',
    bgColor: '#2C3E50',
    tag: 'Misc',
    tagClass: 'tag--misc',
    shortDesc: 'Stainless steel coffee scale with 0.1 g resolution and built-in timer.',
    description:
      'Achieve repeatable, café-quality brews with this professional-grade digital scale. Accurate to 0.1 g up to 3,000 g, ' +
      'it features a built-in shot/brew timer, auto-off, tare function, and high-speed response time (< 0.5 s) for real-time ' +
      'pour control. The waterproof stainless surface wipes clean in seconds. Powered by 2× AAA batteries (included).',
    history:
      'Precision scales entered specialty coffee in the early 2000s as barista competitions began standardising espresso recipes ' +
      'by dose and yield. James Hoffmann\'s and Scott Rao\'s work popularising extraction science brought scales to home brewers by ' +
      'the 2010s. The 2015 World Barista Championship saw almost every competitor using a scale on the espresso machine — cementing ' +
      'precision measurement as essential craft rather than obsessive hobby. Today a scale is the single highest-impact tool for ' +
      'improving brew quality.',
    specs: [
      { key: 'Capacity',  val: '3,000 g' },
      { key: 'Resolution',val: '0.1 g' },
      { key: 'Timer',     val: 'Built-in (up/down)' },
      { key: 'Response',  val: '< 0.5 seconds' },
      { key: 'Surface',   val: 'Waterproof stainless' },
      { key: 'Power',     val: '2× AAA (included)' },
    ],
    sku: 'BH-MISC-003',
  },
  {
    id: 'misc-004a',
    name: 'BrewHaven Gift Card — £25',
    category: 'misc',
    price: 25.00,
    emoji: '🎁',
    bgColor: '#8B5E3C',
    tag: 'Misc',
    tagClass: 'tag--misc',
    shortDesc: 'The perfect gift for any coffee lover — £25 credit, redeemable on any product.',
    description:
      'Share the joy of great coffee with a BrewHaven Gift Card. This £25 credit can be used to purchase ' +
      'any product in our range — beans, machines, or accessories. ' +
      'Delivered digitally by email within minutes, with a beautifully designed printable certificate included.',
    history:
      'The concept of prepaid gift certificates dates to the early 20th century in department stores. Digital gift cards emerged ' +
      'in the late 1990s alongside e-commerce. In specialty coffee, gift cards have become one of the most popular ways to ' +
      'introduce friends to new roasters and equipment — a tradition BrewHaven is proud to continue.',
    specs: [
      { key: 'Value',      val: '£25' },
      { key: 'Delivery',   val: 'Email (within 5 minutes)' },
      { key: 'Valid For',  val: 'All products' },
      { key: 'Expiry',     val: 'No expiry' },
      { key: 'Transfer',   val: 'Non-transferable' },
      { key: 'Refund',     val: 'Non-refundable' },
    ],
    sku: 'BH-MISC-004A',
  },
  {
    id: 'misc-004b',
    name: 'BrewHaven Gift Card — £50',
    category: 'misc',
    price: 50.00,
    emoji: '🎁',
    bgColor: '#6B3E26',
    tag: 'Misc',
    tagClass: 'tag--misc',
    shortDesc: 'The perfect gift for any coffee lover — £50 credit, redeemable on any product.',
    description:
      'Share the joy of great coffee with a BrewHaven Gift Card. This £50 credit can be used to purchase ' +
      'any product in our range — beans, machines, or accessories. ' +
      'Delivered digitally by email within minutes, with a beautifully designed printable certificate included.',
    history:
      'The concept of prepaid gift certificates dates to the early 20th century in department stores. Digital gift cards emerged ' +
      'in the late 1990s alongside e-commerce. In specialty coffee, gift cards have become one of the most popular ways to ' +
      'introduce friends to new roasters and equipment — a tradition BrewHaven is proud to continue.',
    specs: [
      { key: 'Value',      val: '£50' },
      { key: 'Delivery',   val: 'Email (within 5 minutes)' },
      { key: 'Valid For',  val: 'All products' },
      { key: 'Expiry',     val: 'No expiry' },
      { key: 'Transfer',   val: 'Non-transferable' },
      { key: 'Refund',     val: 'Non-refundable' },
    ],
    sku: 'BH-MISC-004B',
  },
  {
    id: 'misc-004c',
    name: 'BrewHaven Gift Card — £100',
    category: 'misc',
    price: 100.00,
    emoji: '🎁',
    bgColor: '#4A2C2A',
    tag: 'Misc',
    tagClass: 'tag--misc',
    shortDesc: 'The perfect gift for any coffee lover — £100 credit, redeemable on any product.',
    description:
      'Share the joy of great coffee with a BrewHaven Gift Card. This £100 credit can be used to purchase ' +
      'any product in our range — beans, machines, or accessories. ' +
      'Delivered digitally by email within minutes, with a beautifully designed printable certificate included.',
    history:
      'The concept of prepaid gift certificates dates to the early 20th century in department stores. Digital gift cards emerged ' +
      'in the late 1990s alongside e-commerce. In specialty coffee, gift cards have become one of the most popular ways to ' +
      'introduce friends to new roasters and equipment — a tradition BrewHaven is proud to continue.',
    specs: [
      { key: 'Value',      val: '£100' },
      { key: 'Delivery',   val: 'Email (within 5 minutes)' },
      { key: 'Valid For',  val: 'All products' },
      { key: 'Expiry',     val: 'No expiry' },
      { key: 'Transfer',   val: 'Non-transferable' },
      { key: 'Refund',     val: 'Non-refundable' },
    ],
    sku: 'BH-MISC-004C',
  },
];

/* ==================== State ==================== */
const state = {
  cart: [],
  activeFilter: 'all',
  searchQuery: '',
  currentProduct: null,
  modalQty: 1,
};

/* ==================== DOM Helpers ==================== */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/* ==================== Cart Logic ==================== */
function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = state.cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({ ...product, qty });
  }
  renderCart();
  showToast(`${product.name} added to basket ☕`, 'success');
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  renderCart();
}

function updateCartQty(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  renderCart();
}

function clearCart() {
  state.cart = [];
  renderCart();
}

function cartTotal() {
  return state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function cartCount() {
  return state.cart.reduce((sum, i) => sum + i.qty, 0);
}

/* ==================== Rendering ==================== */

/* -- Cart sidebar -- */
function renderCart() {
  const cartCount$ = $('#cart-count');
  const count = cartCount();
  if (cartCount$) {
    cartCount$.textContent = count;
    cartCount$.style.display = count > 0 ? 'flex' : 'none';
  }

  const itemsEl = $('#cart-items');
  const emptyEl = $('#cart-empty');
  const footerEl = $('#cart-footer');

  if (!itemsEl) return;

  if (state.cart.length === 0) {
    if (emptyEl)  emptyEl.style.display  = '';
    if (footerEl) footerEl.style.display = 'none';
    itemsEl.innerHTML = '';
    return;
  }
  if (emptyEl)  emptyEl.style.display  = 'none';
  if (footerEl) footerEl.style.display = '';

  itemsEl.innerHTML = state.cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item__thumb" style="background:${item.bgColor}20">${item.emoji}</div>
      <div>
        <div class="cart-item__name">${item.name}</div>
        <div class="cart-item__price">£${(item.price * item.qty).toFixed(2)}</div>
        <div class="cart-item__qty">
          <button class="cart-item__qty-btn" data-action="dec" data-id="${item.id}" aria-label="Decrease quantity">−</button>
          <span class="cart-item__qty-val">${item.qty}</span>
          <button class="cart-item__qty-btn" data-action="inc" data-id="${item.id}" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button class="cart-item__remove" data-id="${item.id}" aria-label="Remove ${item.name}">✕</button>
    </div>
  `).join('');

  const subtotal = cartTotal();
  const shipping = subtotal >= 50 ? 0 : 4.99;
  const total = subtotal + shipping;

  const subtotalEl  = $('#cart-subtotal');
  const shippingEl  = $('#cart-shipping');
  const totalEl     = $('#cart-total');

  if (subtotalEl) subtotalEl.textContent = `£${subtotal.toFixed(2)}`;
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `£${shipping.toFixed(2)}`;
  if (totalEl)    totalEl.textContent    = `£${total.toFixed(2)}`;
}

/* -- Products grid -- */
function renderProducts() {
  const grid = $('#products-grid');
  if (!grid) return;

  const filtered = PRODUCTS.filter(p => {
    const catMatch = state.activeFilter === 'all' || p.category === state.activeFilter;
    const q = state.searchQuery.toLowerCase().trim();
    const searchMatch = !q ||
      p.name.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tag.toLowerCase().includes(q);
    return catMatch && searchMatch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="no-results__icon">🔍</div>
        <h3>No products found</h3>
        <p>Try a different search term or category.</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <article class="product-card" data-id="${p.id}" role="article" aria-label="${p.name}">
      <div class="product-card__image" style="background:${p.bgColor}">
        <span class="tag ${p.tagClass}">${p.tag}</span>
        <span>${p.emoji}</span>
      </div>
      <div class="product-card__body">
        <div class="product-card__name">${p.name}</div>
        <div class="product-card__desc">${p.shortDesc}</div>
        <div class="product-card__footer">
          <span class="product-card__price">£${p.price.toFixed(2)}</span>
          <button class="product-card__add" data-id="${p.id}" aria-label="Add ${p.name} to basket">+</button>
        </div>
      </div>
    </article>
  `).join('');
}

/* -- Product modal -- */
function openProductModal(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  state.currentProduct = p;
  state.modalQty = 1;

  const overlay = $('#product-modal');
  if (!overlay) return;

  $('#modal-title').textContent  = p.name;
  $('#modal-image').style.background = p.bgColor;
  $('#modal-image').querySelector('.modal__image-emoji').textContent = p.emoji;
  $('#modal-tag').className   = `tag ${p.tagClass}`;
  $('#modal-tag').textContent = p.tag;
  $('#modal-price').textContent = `£${p.price.toFixed(2)}`;
  $('#modal-sku').textContent   = `SKU: ${p.sku}`;
  $('#modal-description').textContent = p.description;
  $('#modal-history').textContent     = p.history;
  $('#modal-qty-val').textContent = '1';

  const specsList = $('#modal-specs');
  specsList.innerHTML = p.specs.map(s => `
    <div class="modal__spec">
      <span class="modal__spec-key">${s.key}:</span>
      <span class="modal__spec-val">${s.val}</span>
    </div>
  `).join('');

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const overlay = $('#product-modal');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
  state.currentProduct = null;
}

/* ==================== Cart Sidebar ==================== */
function openCart() {
  $('#cart-overlay').classList.add('open');
  $('#cart-sidebar').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  $('#cart-overlay').classList.remove('open');
  $('#cart-sidebar').classList.remove('open');
  document.body.style.overflow = '';
}

/* ==================== Checkout / Google Pay ==================== */
function openCheckout() {
  if (state.cart.length === 0) {
    showToast('Your basket is empty.', 'error');
    return;
  }
  closeCart();

  // Populate checkout summary
  const summaryItems = $('#checkout-summary-items');
  const summaryTotal = $('#checkout-summary-total');
  const subtotal = cartTotal();
  const shipping = subtotal >= 50 ? 0 : 4.99;
  const total = subtotal + shipping;

  if (summaryItems) {
    summaryItems.innerHTML = state.cart.map(i =>
      `<div class="checkout-summary__item">
         <span>${i.name} ×${i.qty}</span>
         <span>£${(i.price * i.qty).toFixed(2)}</span>
       </div>`
    ).join('') +
    `<div class="checkout-summary__item">
       <span>Shipping</span>
       <span>${shipping === 0 ? 'FREE' : '£' + shipping.toFixed(2)}</span>
     </div>`;
  }
  if (summaryTotal) {
    summaryTotal.innerHTML = `<span>Total</span><span class="checkout-summary__total-price">£${total.toFixed(2)}</span>`;
  }

  const overlay = $('#checkout-overlay');
  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // Initialise Google Pay button
  initGooglePay(total);
}

function closeCheckout() {
  const overlay = $('#checkout-overlay');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ==================== Google Pay Integration ==================== */
const GPAY_CONFIG = {
  environment: 'TEST',
  apiVersion: 2,
  apiVersionMinor: 0,
  allowedPaymentMethods: [{
    type: 'CARD',
    parameters: {
      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
      allowedCardNetworks: ['AMEX', 'DISCOVER', 'MASTERCARD', 'VISA'],
    },
    tokenizationSpecification: {
      type: 'PAYMENT_GATEWAY',
      parameters: {
        gateway: 'example',
        gatewayMerchantId: 'exampleGatewayMerchantId',
      },
    },
  }],
  merchantInfo: {
    merchantId: 'BCR2DN4TX9COZFED',
    merchantName: 'BrewHaven Coffee Shop',
  },
};

let googlePayClient = null;

function getGooglePayClient() {
  if (googlePayClient) return googlePayClient;
  if (typeof google !== 'undefined' && google.payments) {
    googlePayClient = new google.payments.api.PaymentsClient({
      environment: GPAY_CONFIG.environment,
    });
  }
  return googlePayClient;
}

function initGooglePay(total) {
  const container = $('#google-pay-btn-container');
  if (!container) return;
  container.innerHTML = '';

  const client = getGooglePayClient();
  if (!client) {
    renderFallbackGPayButton(container, total);
    return;
  }

  const isReadyRequest = {
    apiVersion: GPAY_CONFIG.apiVersion,
    apiVersionMinor: GPAY_CONFIG.apiVersionMinor,
    allowedPaymentMethods: GPAY_CONFIG.allowedPaymentMethods,
  };

  client.isReadyToPay(isReadyRequest)
    .then(res => {
      if (res.result) {
        const btn = client.createButton({
          onClick: () => onGooglePayClicked(total),
          buttonColor: 'black',
          buttonType: 'buy',
          buttonRadius: 6,
        });
        container.appendChild(btn);
      } else {
        renderFallbackGPayButton(container, total);
      }
    })
    .catch(() => renderFallbackGPayButton(container, total));
}

function renderFallbackGPayButton(container, total) {
  container.innerHTML = `
    <button class="gpay-fallback-btn" id="gpay-fallback-btn" type="button" aria-label="Pay with Google Pay">
      <svg xmlns="http://www.w3.org/2000/svg" width="41" height="16" viewBox="0 0 41 16" aria-hidden="true">
        <path fill="#4285F4" d="M18.37 7.67v4.7h-1.5V.97h3.95c1 0 1.86.34 2.55 1.01.7.67 1.05 1.49 1.05 2.47 0 1-.35 1.83-1.05 2.49-.68.65-1.54.98-2.55.98h-2.45zm0-5.27v3.85h2.49c.58 0 1.07-.2 1.45-.59.39-.4.59-.87.59-1.42 0-.55-.2-1.01-.59-1.4-.38-.39-.87-.59-1.45-.59h-2.49z"/>
        <path fill="#EA4335" d="M27.55 5.3c1.1 0 1.97.3 2.6.9.63.6.94 1.42.94 2.46v4.97h-1.43v-1.12h-.07c-.61.92-1.43 1.38-2.45 1.38-.87 0-1.59-.26-2.18-.77-.59-.51-.88-1.15-.88-1.92 0-.81.31-1.46.92-1.93.61-.47 1.43-.71 2.45-.71.87 0 1.59.16 2.15.47v-.33c0-.5-.2-.93-.61-1.28-.41-.35-.88-.53-1.42-.53-.82 0-1.46.35-1.94 1.04l-1.32-.83c.73-1.04 1.8-1.56 3.24-1.56zm-1.93 5.8c0 .38.16.7.49.97.33.26.71.39 1.15.39.62 0 1.17-.23 1.65-.69.48-.46.72-.99.72-1.61-.45-.36-1.08-.54-1.88-.54-.59 0-1.08.14-1.47.43-.4.3-.66.67-.66 1.05z"/>
        <path fill="#4285F4" d="M37.38 5.56l-5 11.51h-1.55l1.86-4.03-3.3-7.48h1.63l2.38 5.74h.03l2.32-5.74h1.63z"/>
        <path fill="#34A853" d="M13.7 7.04c0-.46-.04-.91-.11-1.34H7.01v2.53h3.76a3.22 3.22 0 0 1-1.39 2.11v1.74h2.24c1.31-1.21 2.07-2.99 2.07-5.04z"/>
        <path fill="#FBBC04" d="M7.01 14c1.88 0 3.46-.62 4.61-1.69l-2.24-1.74c-.62.42-1.42.66-2.37.66-1.82 0-3.37-1.23-3.92-2.88H.78v1.8A6.97 6.97 0 0 0 7.01 14z"/>
        <path fill="#EA4335" d="M3.09 8.35A4.2 4.2 0 0 1 2.87 7c0-.47.08-.93.22-1.35V3.85H.78A6.97 6.97 0 0 0 .04 7c0 1.12.27 2.19.74 3.15l2.31-1.8z"/>
        <path fill="#4285F4" d="M7.01 2.77c1.03 0 1.95.35 2.68 1.05l2-2A6.93 6.93 0 0 0 7.01 0 6.97 6.97 0 0 0 .78 3.85L3.09 5.65C3.64 4 5.19 2.77 7.01 2.77z"/>
      </svg>
      <span>Pay</span>
    </button>`;
  $('#gpay-fallback-btn').addEventListener('click', () => onGooglePayClicked(total));
}

function onGooglePayClicked(total) {
  const client = getGooglePayClient();

  const paymentDataRequest = {
    ...GPAY_CONFIG,
    transactionInfo: {
      countryCode: 'GB',
      currencyCode: 'GBP',
      totalPriceStatus: 'FINAL',
      totalPrice: total.toFixed(2),
      totalPriceLabel: 'Total',
    },
    callbackIntents: [],
  };

  if (client) {
    client.loadPaymentData(paymentDataRequest)
      .then(paymentData => handleGooglePaySuccess(paymentData))
      .catch(err => {
        if (err.statusCode !== 'CANCELED') {
          showToast('Payment failed. Please try again.', 'error');
        }
      });
  } else {
    // Fallback simulation for demo environments
    simulatePayment(total);
  }
}

function handleGooglePaySuccess(paymentData) {
  closeCheckout();
  clearCart();
  showToast('🎉 Payment successful! Your order is confirmed.', 'success');
}

function simulatePayment(total) {
  // In a demo environment without the Google Pay API loaded
  closeCheckout();
  clearCart();
  showToast(`🎉 Demo payment of £${total.toFixed(2)} accepted! Order confirmed.`, 'success');
}

/* ==================== Manual Payment Form ==================== */
function handleManualPayment(e) {
  e.preventDefault();
  const form = e.target;
  const cardName   = form.querySelector('#card-name').value.trim();
  const cardNumber = form.querySelector('#card-number').value.replace(/\s/g, '');
  const cardExpiry = form.querySelector('#card-expiry').value.trim();
  const cardCvc    = form.querySelector('#card-cvc').value.trim();

  // Basic client-side validation
  if (!cardName) { showToast('Please enter the cardholder name.', 'error'); return; }
  if (!/^\d{13,19}$/.test(cardNumber)) { showToast('Please enter a valid card number.', 'error'); return; }
  if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) { showToast('Please enter expiry as MM/YY.', 'error'); return; }
  if (!/^\d{3,4}$/.test(cardCvc)) { showToast('Please enter a valid CVC.', 'error'); return; }

  const total = cartTotal() + (cartTotal() >= 50 ? 0 : 4.99);
  closeCheckout();
  clearCart();
  form.reset();
  showToast(`🎉 Payment of £${total.toFixed(2)} confirmed! Thank you, ${cardName}.`, 'success');
}

/* ==================== Toast ==================== */
function showToast(message, type = 'success') {
  const container = $('#toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${type === 'success' ? '✓' : '✕'}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideOut .3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==================== Filter & Search ==================== */
function setFilter(category) {
  state.activeFilter = category;
  $$('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === category);
  });
  renderProducts();
}

function setSearch(query) {
  state.searchQuery = query;
  renderProducts();
}

/* ==================== Navbar Active State ==================== */
function updateNavActive() {
  const sections = $$('[data-section]');
  const scrollY  = window.scrollY + 80;
  let current = '';
  sections.forEach(s => { if (s.offsetTop <= scrollY) current = s.dataset.section; });
  $$('.navbar__link[data-nav]').forEach(l => l.classList.toggle('active', l.dataset.nav === current));
}

/* ==================== Format card inputs ==================== */
function formatCardNumber(el) {
  el.addEventListener('input', () => {
    let v = el.value.replace(/\D/g, '').slice(0, 19);
    el.value = v.replace(/(.{4})/g, '$1 ').trim();
  });
}
function formatExpiry(el) {
  el.addEventListener('input', () => {
    let v = el.value.replace(/\D/g, '').slice(0, 4);
    if (v.length >= 3) v = v.slice(0,2) + '/' + v.slice(2);
    el.value = v;
  });
}

/* ==================== Init ==================== */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderCart();

  /* Product grid interactions */
  $('#products-grid').addEventListener('click', e => {
    const addBtn = e.target.closest('.product-card__add');
    if (addBtn) { e.stopPropagation(); addToCart(addBtn.dataset.id); return; }
    const card = e.target.closest('.product-card');
    if (card) openProductModal(card.dataset.id);
  });

  /* Filter buttons */
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.dataset.filter));
  });

  /* Search */
  const searchInput = $('#shop-search');
  if (searchInput) {
    searchInput.addEventListener('input', e => setSearch(e.target.value));
  }

  /* Cart button */
  $('#cart-btn').addEventListener('click', openCart);
  $('#cart-overlay').addEventListener('click', closeCart);
  $('#cart-close-btn').addEventListener('click', closeCart);
  $('#cart-checkout-btn').addEventListener('click', openCheckout);
  $('#cart-clear-btn').addEventListener('click', () => { clearCart(); showToast('Basket cleared.'); });

  /* Cart item interactions (delegated) */
  $('#cart-items').addEventListener('click', e => {
    const btn = e.target.closest('.cart-item__qty-btn');
    if (btn) { updateCartQty(btn.dataset.id, btn.dataset.action === 'inc' ? 1 : -1); return; }
    const rem = e.target.closest('.cart-item__remove');
    if (rem) removeFromCart(rem.dataset.id);
  });

  /* Product modal */
  $('#product-modal').addEventListener('click', e => {
    if (e.target === $('#product-modal')) closeProductModal();
  });
  $('#modal-close').addEventListener('click', closeProductModal);
  $('#modal-qty-dec').addEventListener('click', () => {
    state.modalQty = Math.max(1, state.modalQty - 1);
    $('#modal-qty-val').textContent = state.modalQty;
  });
  $('#modal-qty-inc').addEventListener('click', () => {
    state.modalQty += 1;
    $('#modal-qty-val').textContent = state.modalQty;
  });
  $('#modal-add-btn').addEventListener('click', () => {
    if (state.currentProduct) {
      addToCart(state.currentProduct.id, state.modalQty);
      closeProductModal();
    }
  });

  /* Checkout */
  $('#checkout-overlay').addEventListener('click', e => {
    if (e.target === $('#checkout-overlay')) closeCheckout();
  });
  $('#checkout-close').addEventListener('click', closeCheckout);

  /* Manual payment form */
  const payForm = $('#payment-form');
  if (payForm) payForm.addEventListener('submit', handleManualPayment);

  /* Format helpers */
  const cardNumberEl = $('#card-number');
  const cardExpiryEl = $('#card-expiry');
  if (cardNumberEl) formatCardNumber(cardNumberEl);
  if (cardExpiryEl) formatExpiry(cardExpiryEl);

  /* Navbar burger */
  const burger = $('#navbar-burger');
  const navMenu = $('#navbar-menu');
  if (burger && navMenu) {
    burger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      burger.setAttribute('aria-expanded', navMenu.classList.contains('open'));
    });
  }

  /* Nav link smooth scroll */
  $$('.navbar__link[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = $(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (navMenu) navMenu.classList.remove('open');
    });
  });

  /* Scroll: active nav state */
  window.addEventListener('scroll', updateNavActive, { passive: true });
  updateNavActive();

  /* Close modals on Escape */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if ($('#product-modal').classList.contains('open'))   closeProductModal();
      else if ($('#cart-sidebar').classList.contains('open')) closeCart();
      else if ($('#checkout-overlay').classList.contains('open')) closeCheckout();
    }
  });

  /* Hero CTA scroll */
  const heroShopBtn = $('#hero-shop-btn');
  if (heroShopBtn) {
    heroShopBtn.addEventListener('click', () => {
      $('#shop').scrollIntoView({ behavior: 'smooth' });
    });
  }
});
