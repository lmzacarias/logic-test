
const main = (texto, subtexto) => {


    const countLetters = (arrayIzq, arrayDer, subText) => {
  
      if (arrayIzq.length === 0 || arrayDer.length === 0) {
        return [0, 0];
      }
      let countIzq = 0;
      for (let index = 0; index < arrayIzq.length; index++) {
        const element = arrayIzq[index];
        countIzq += element.length;
      }
    
      let countDer = 0;
      for (let indexDer = 0; indexDer < arrayDer.length; indexDer++) {
        const element = arrayDer[indexDer];
        countDer += element.length;
      }
    
      return [
        countIzq + (arrayIzq.length - 1) * subText.length,
        countDer + (arrayDer.length - 1) * subText.length,
      ];
    };
    
    const mayorNumero = (array) => {
      let mayor = 0;
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element > mayor) {
          mayor = element;
        }
      }
      return mayor;
    };
    if (!texto.includes(subtexto)) return -1;
  
    const myArr = texto.split(subtexto);
    if (myArr.length > 2) {
      const arrayCount = [];
      for (let index = 0; index < myArr.length; index++) {
        const arrayIzq = [];
        const arrayDer = [];
  
        for (let index2 = 0; index2 < myArr.length; index2++) {
          const element2 = myArr[index2];
          if (index2 <= index) {
            arrayIzq.push(element2);
          }
          if (index2 > index) {
            arrayDer.push(element2);
          }
        }
        const resp = countLetters(arrayIzq, arrayDer, subtexto);
        
        arrayCount.push(...resp);
      }
      
      return mayorNumero(arrayCount);
    }
    const izq = myArr[0];
    const der = myArr[1];
  
    return izq.length > der.length ? izq.length : der.length;
  };
  
  const texto =
    "axucgrzqebtbuxpiyuavccltqwcmpzmmfaakncabbbdxepyevkswxhlellrfobyufmyumrorcgmjilzogezuggtxotzukeifvybxkacmwvkhswcoabmgwknminltbdqexopvysobpautmkmiuipuzfqpmwhwiyzdprxnadedrquxzassyfgrrjmgfenwmynehqnabgajrnfgdfvftghczetmhcakgnvjuuctufjgoqowhwtozkskaszvfpijugitoextqibynisnfbenweojapwtclszycusagzwbgavxawzfnuhmpddgzyymuxurdqkfkejsqdesmmzlxuokmloduolwyslonilvhjlqtftyxfoaopmvvomiddncnwqmxozqbmhuqpksuydcwwwuxvdfwrfiizcccktmfxcpdtunnknagsgntpnccgimnqketezhsbyrofjvwoqvturvwzttugivywdnqtzjnkyfdzkqcabyinwsowecczjgwwcgomuoogaxmbxcwjbjqozjxrzcyojylanjlpcdzgeraxhbaybxsuhcuvlsshmeblbdfaziubugweeckkvxqgtdrrsbxparablqpypqtenytfbntudlyakehtwhbbtngusmjaudcbazjfeqjufbileiwtylkkfkdmtertqzayaohzkuokkuplcwqrcwzxeqlzbhlubycufmwbvsbcseggwpmezxxnxmjcabibhjlurjtzuxxjartfgqogmrgpjigfazhpoaqggwpakbcxnghxhddcydmzqgsejyrstktdpcaeqpiqnzyebaioirhvlckxamorbriylesbwszzletemgyfcjyhpsmjandcxdrsjvfzuswuoxybtxzmhjqhbcxbhxdhbxjbrecpuvutlfyamkltfogwklisxhscgvwufckkszpejndjxzsaiuxengwgbpdssryllxmzgejtwmqyehdtymzivyygtqqbcu";
  const subtexto = "ggwp";
  
  const texto2 =
    "yfuajpocenamocibexujhalinesvlijlmylxmpexvfddpejowufvkbzkwlmxeoyartjholmpzxeuhquvmiuhgvasitvtgiexvunqhoeeowkpwbwwvipeptperrnljsomwcnrvpjmhfsjgixkopmxbgtlogplujljwxodbfczsxgondmgfhpicdroumealpplxkozuusmufmojyatfthxjlkdzewjfvjmijmkqppvhoedbhxnruuonntgstdbxchxyztnoqttgigyaxtyjlpfckefclzuylaskhgynmopqkbafsrnvifjuurmafusdqbziqpejdscfvyepevmfodjchakjndqcyvlleoxyadpzcmphchajrrbumoivxruwdliknfhgpdjfxreosblkjyjtrmjrqmfjheamkmckipseuzhvqcgyortoaheajxfiziunqgzizijoawrvjeyvcrmtpedrzkdukhzjjnaiejfxtkfpdpgdhsskfkfyusgfaefpodnprtcwtwfmjtyfwlsiqtgwnvluxkmvgmvshgikrteakgydwtbnhqfbtnynlwghstcpvufrvjxoehamfbvnjrrccwqgickbynzjzroyyiirnsdchfbivviqnbmhtercgvqolwzlixigoddxiukmitymvljojpwjjdmteegbqwgovnxanresklkiabrnlfumxtmuclccbkajcbrmmdzfdzzcftqiuaadcfrfocdpifyrasthgkmufkoyvlopavsjpmjystcuwtrqxsrymlmjbdapjmtcsberjknhyawbkeeimdmhtpuixkmllpqbjhqpzfybemsilpzzrlifxjxhskzengcldevyswdtxqkniuiffjqwdhjushlowheuotpfinwodqzfcjcypgqrtvpclogidofispdmgdjbscpouxckilknnqcjwydqzfbfnrwfahkmorcndxqwljefekdpafbsdoldbmkvizvtzko";
  const subtexto2 = "jfx";
  
  console.log("ggwp",main(texto, subtexto));
  console.log("jfx",main(texto2, subtexto2));