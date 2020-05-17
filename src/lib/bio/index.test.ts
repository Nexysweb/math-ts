// originally from https://github.com/johnb8005/bio/blob/master/src/bio.test.js
import * as Bio from './index';

test('anticodon', () => {
  const str = 'ATCG';
  const ac = 'TAGC';

  expect(Bio.anticodon(str)).toEqual(ac);
});

test("DNA should be translted to RNA ", () => {
  const inp = "ATCG";
  const out = "AUCG";

  expect(Bio.dnaToRna(inp)).toEqual(out);
});

test("amino acid should be translated to codon", () => {
  const inp = 'Y'
  const out = "TAY"

  expect(Bio.aaToCodon(inp)).toEqual(out)
});

test("codon should be translted to AA ", () => {
  const inp = "TCAGGG"
  const out = "SG"

  expect(Bio.codons(inp)).toEqual(out);
});