function main(text, subText) {
  const countLeftToRight = countLetters(text, subText);
  const invertLetters = reverseLetters(text, subText);
  const countRightToLeft = countLetters(invertLetters[0], invertLetters[1]);
  console.log('result: ', Math.max(...countLeftToRight, ...countRightToLeft));
}

function countLetters(text, subText) {
  var textIndex = [];
  var idx = text.indexOf(subText);
  while (idx != -1) {
    textIndex.push(idx);
    idx = text.indexOf(subText, idx + 1);
  }

  return textIndex;
}

function reverseLetters(text, subText) {
  return [
    text.split('').reverse().join(''),
    subText.split('').reverse().join(''),
  ];
}

main(
  'axucgrzqebtbuxpiyuavccltqwcmpzmmfaakncabbbdxepyevkswxhlellrfobyufmyumrorcgmjilzogezuggtxotzukeifvybxkacmwvkhswcoabmgwknminltbdqexopvysobpautmkmiuipuzfqpmwhwiyzdprxnadedrquxzassyfgrrjmgfenwmynehqnabgajrnfgdfvftghczetmhcakgnvjuuctufjgoqowhwtozkskaszvfpijugitoextqibynisnfbenweojapwtclszycusagzwbgavxawzfnuhmpddgzyymuxurdqkfkejsqdesmmzlxuokmloduolwyslonilvhjlqtftyxfoaopmvvomiddncnwqmxozqbmhuqpksuydcwwwuxvdfwrfiizcccktmfxcpdtunnknagsgntpnccgimnqketezhsbyrofjvwoqvturvwzttugivywdnqtzjnkyfdzkqcabyinwsowecczjgwwcgomuoogaxmbxcwjbjqozjxrzcyojylanjlpcdzgeraxhbaybxsuhcuvlsshmeblbdfaziubugweeckkvxqgtdrrsbxparablqpypqtenytfbntudlyakehtwhbbtngusmjaudcbazjfeqjufbileiwtylkkfkdmtertqzayaohzkuokkuplcwqrcwzxeqlzbhlubycufmwbvsbcseggwpmezxxnxmjcabibhjlurjtzuxxjartfgqogmrgpjigfazhpoaqggwpakbcxnghxhddcydmzqgsejyrstktdpcaeqpiqnzyebaioirhvlckxamorbriylesbwszzletemgyfcjyhpsmjandcxdrsjvfzuswuoxybtxzmhjqhbcxbhxdhbxjbrecpuvutlfyamkltfogwklisxhscgvwufckkszpejndjxzsaiuxengwgbpdssryllxmzgejtwmqyehdtymzivyygtqqbcu',
  'ggwp'
);
