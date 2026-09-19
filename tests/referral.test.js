const assert = require('assert');
const { parseReferralFromText, getReferralReward } = require('../referral');

assert.strictEqual(parseReferralFromText('/start ref_12345'), '12345');
assert.strictEqual(parseReferralFromText('https://t.me/x?start=ref_987'), '987');
assert.strictEqual(getReferralReward(100), 30);
assert.strictEqual(getReferralReward(250.50), 75.15);
console.log('referral tests passed');
