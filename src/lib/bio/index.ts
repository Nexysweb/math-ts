// from https://bitbucket.org/jboissard/ch.nexys.math/src/master/src/main/scala/ch/nexys/bio/Dna.scala
// and https://github.com/johnb8005/bio/blob/master/src/bio.js
//case class AminoAcid(l: Char, short: String, name: String)

/**
 * @see https://en.wikipedia.org/wiki/Amino_acid
 */
export const aas:{l: string, short: string, name: string}[] = [
  ['F', "Phe", "Phenylananine"],
  ['L', "Leu", "Leucine"],
  ['I', "Ile", "Isoleucine"],
  ['M', "Met", "Methionine"],
  ['V', "Val", "Valine"],
  ['S', "Ser", "Serine"],
  ['P', "Pro", "Proline"],
  ['T', "Thr", "Threonine"],
  ['A', "Ala", "Alanine"],
  ['Y', "Tyr", "Tyrosine"],
  ['H', "His", "Histidine"],
  ['Q', "Gln", "Glutamine"],
  ['K', "Lys", "Lysine"],
  ['D', "Asp", "Aspartic Acid"],
  ['E', "Glu", "Glutamic Acid"],
  ['C', "Cys", "Cysteine"],
  ['W', "Trp", "Tryptophane"],
  ['R', "Arg", "Arginine"],
  ['S', "Ser", "Serine"],
  ['G', "Gly", "Glycine"],
  ['U', "Sec", "Selenocysteine"], // 21st aa
  ['O', "Pyr", "Pyrrolysine"] // not in humans
].map(a => {
  return {l: a[0], short: a[1], name: a[2]}
});

type AA = 'A' | 'R' | 'N' | 'D' | 'C' | 'Q' | 'E' | 'G' | 'H' | 'I' | 'L' | 'K' | 'M' | 'F' | 'P' | 'S' | 'T' | 'W' | 'Y' | 'V' | ')' | '}'|  ']'

/*
  R => purines abbreviated as R (G|A)
  Y => pyrimidines abbiviated as Y (C|T)
  N => any (A|T|G|C)
  M/H => all but G (A|T|C)
*/
export const aaToCodon= (aa:AA):string => {
  const hn = new Map<AA, string>([
    ['A', 'GCN'],
    ['R', 'CGN'], //"MGR"
    ['N', 'AAY'],
    ['D', 'GAY'],
    ['C', 'TGY'],
    ['Q', 'CAR'],
    ['E', 'GAR'],
    ['G', 'GGN'],
    ['H', 'CAY'],
    ['I', 'ATM'],
    ['L', 'CTN'], //"YTR" 
    ['K', 'AAR'],
    ['M', 'ATG'],
    ['F', 'TTY'],
    ['P', 'CCN'],
    ['S', 'TCN'], // "AGY"
    ['T', 'ACN'],
    ['W', 'TGG'],
    ['Y', 'TAY'],
    ['V', 'GTN'],
    /* stop codon */
    [')', 'TAA'],
    [']', 'TAG'],     
    ['}', 'TGA']
  ]);

  const r = hn.get(aa);

  if(!r) {
    throw Error('no associated codon')
  }

  return r;
};

export const codonToAa = (codon:string) => {
  switch(codon) {
    case "TTT":
    case "TTC":
      return 'F';
    case "TTG":
    case "TTA":
    case "CTT":
    case "CTC":
    case "CTA":
    case "CTG":
      return 'L';
    case "ATA":
    case "ATT":
    case "ATC":
      return 'I';
    case "ATG":
      return 'M';
    case "GTT":
    case "GTC":
    case "GTA":
    case "GTG":
      return 'V';
    case "TCT":
    case "TCC":
    case "TCA":
    case "TCG":
      return 'S';
    case "CCT":
    case "CCC":
    case "CCA":
    case "CCG":
      return 'P';
    case "ACT":
    case "ACC":
    case "ACA":
    case "ACG":
      return 'T';
    case "GCT":
    case "GCC":
    case "GCA":
    case "GCG":
      return 'A';
    case "TAT":
    case "TAC":
      return 'Y';
    case "TAA":
      return ')';
    case "TAG":
      return ']';
    case "CAT":
    case "CAC":
      return 'H';
    case "CAA":
    case "CAG":
      return 'Q';
    case "AAT":
    case "AAC":
      return 'N';
    case "AAA":
    case "AAG":
      return 'K';
    case "GAT":
    case "GAC":
      return 'D';
    case "GAA":
    case "GAG":
      return 'E';
    case "TGT":
    case "TGC":
      return 'C';
    case "TGA":
      return '}';
    case "TGG":
      return 'W';
    case "CGT":
    case "CGC":
    case "CGA":
    case "CGG":
      return 'R';
    case "AGT":
    case "AGC":
      return 'S';
    case "AGA":
    case "AGG":
      return 'R';
    case "GGT":
    case "GGC":
    case "GGA":
    case "GGG":
      return 'G';
      break;
    default:
      return null;
  }
}

export const anticodon = (str:string):string => {
  return Array.from(str).map(a=> {
    switch(a) {
      case 'A' :
        return 'T'
      case 'T':
        return 'A'
      case 'G':
        return 'C'
      case 'C':
        return 'G'
      case 'U':
        return 'A'
        break;
      default:
        return null;
    }
  }).join('');
};

export const dnaToRna = (str:string):string => {
  return Array.from(str).map(a => {
    switch (a) {
      case 'A':
      case 'G':
      case 'C':
        return a;
      case 'T':
        return 'U';
        break;
      default:
        return null;
    }
  }).join('');
};

export const codons = (str:string):string => {
  // divide the string in subset strings of length 3
  const codons = str.match(/.{1,3}/g);

  if (!codons) {
    return '';
  } 

  return codons.map(codonToAa).join('');
}