export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const syms = ['EWY', 'SPY', 'TLT', 'IEF', 'BND'];
  const end   = Math.floor(Date.now() / 1000);
  const start = end - 60 * 60 * 24 * 185; // 185일 전

  const results = {};

  await Promise.all(syms.map(async (sym) => {
    try {
      const url = `https://query1.finance.yahoo.com/v8/finance/chart/${sym}?interval=1d&period1=${start}&period2=${end}`;
      const r = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });
      const data = await r.json();
      const closes = data?.chart?.result?.[0]?.indicators?.quote?.[0]?.close;
      if (closes && closes.length >= 2) {
        const first = closes.find(v => v != null);
        const last  = closes[closes.length - 1] ?? closes.findLast(v => v != null);
        results[sym] = first && last ? ((last - first) / first) * 100 : null;
      } else {
        results[sym] = null;
      }
    } catch {
      results[sym] = null;
    }
  }));

  res.status(200).json(results);
}
