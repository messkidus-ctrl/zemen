function parseReferralFromText(text) {
  if (!text || typeof text !== 'string') return null;

  const match = text.match(/(?:^|[?&])start=ref_(\d+)/i) || text.match(/ref_(\d+)/i);
  if (!match) return null;

  const value = match[1];
  return value && Number.isFinite(Number(value)) ? String(value) : null;
}

function getReferralReward(amount) {
  const num = Number(amount) || 0;
  return Number((num * 0.30).toFixed(2));
}

module.exports = { parseReferralFromText, getReferralReward };
