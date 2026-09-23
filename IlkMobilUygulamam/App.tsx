// Çalıştırmak için npx expo start


import { StyleSheet, Text, View} from 'react-native';

export default function App(){
  return(
    <View style = {styles.container}>
      <Text> Deneme Yazısı!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: `#222`,
    fontWeight: `bold`
  }
});

// const değeri değişmeyecek değişkenler için. let ise değeri sonradan değiştirilebilecekler için.

const _name = "İbrahim";
let _ID = 23

console.log(`İsim:${_name} ve ID:${_ID}`);

// Array: Birden çok değeri sıralı biçimde tutar.

const technologies = ["React Native", "Expo", "TypeScript"];
// İlk elemanın indeksi sıfır.

console.log(technologies[0]);
console.log(technologies.length);


// - Object -

// Object, birbirleriyle ilişkili bilgileri ad-değer çiftleri hâlinde tutar.
// Mobil uygulamalarda kullanıcı, ürün veya mesaj gibi varlıkları temsil etmek için en çok kullanılan yapıdır.

const student = {
  id: 1,
  name: "İbrahim",
  department: "Computer Engineering",
  grade: 3
};

console.log(student.id);
console.log(student.name);
console.log(student.department);
console.log(student.grade);

// Object Arrayler sık sık karşılaşacağımız bir yapıdır.

const students = [ { id: 1, name: "Ali", grade: 1},
                   { id: 2, name: "İbrahim", grade: 3},
                   { id: 3, name: "Elif", grade: 4} ]

            
    // Function
function greet(name: string){
  return `greet ${name}`;
}

    // Arrow Function
const greet2 = (name: string) => {
  return `Merhaba ${name}`;
}

const greet3 = (name: string) => {return `Merhaba ${name}`;};

// Üç fonksiyonda aynı işi yapar. Ama sonuncusu oldukça yaygındır.

// map(), bir array'in her elementini dönüştürerek yeni bir array üretir. Özgün array değişmez.

const numbers = [1, 2, 3];
const doubled = numbers.map(number => number * 2);

console.log(doubled);

// filer(), bir koşulu sağlayan elemenlerden yeni bir array oluşturur.

const numbers2 = [ 1, 2, 3, 4, 5];
const result = numbers2.filter(numbers2 => numbers2 > 3);
console.log(result);

// find(), koşulu sağlayan ilk elemnti döndürür. Sonuç bir array değil, tek bir elementtir.

// students dizisindeki elemanları sırayla tarar ve id'si 2 olanı student2 değişkenine atar.
const student2 = students.find(item => item.id === 2);
// student2'ye atanan objenin name propety'si ekrana yazdırılır.
console.log(student.name);

// ÖNEMLİ: Karşılaştırmalarda == yerine === kullanınız. === hem değeri hem de
// tipi karşılaştırır ve beklenmedik sonuçları önler.

// Spread Operator
// Üç nokta ... yazımı, var olan bir arrayin elementlerini kendisini değiştirmeden
// yeni bir arrayin içine açar.
// ÖNEMLİ: Rest Parametresi ile Spread Operatörü kullanıldığı bağlama göre iki farklı isim alır.
// Görünüşleri aynı olsa da işlevleri birbirinin tam tersidir.


const oldItems = [1, 2, 3];
const newItems = [...oldItems, 4];
console.log(newItems);

// Destructuring
// Bir object'in property'leri tek satırda ayrı variable'lara aktarılabilir.

const student3 = {
  name: "Ali",
  age: 21
};

const {name, age} = student3;
console.log(name);

// DESTRUCTURING (Yapı Bozma): Bir dizi veya nesneden belirli değerleri kolayca
// değişkenlere ayırarak almayı sağlar.

// dizi bozarken [], nesne bozarken {}
/* */

/////////////////////////////////////

// View  Container'dır; içine başka component'ler alır ve layout'u taşır.
// Text  Metin gösterir. Ekrandaki her metin bir Text içinde olmalıdır.
// Pressable  Dokunulabilir alan oluştrur; dokunulduğunda bir gunction çalıştırır.
//  Görsel gösterir. Bu hafta detaylı anlatılmayacak.


// 5.2 StyleSheet

// Stiller StyleSheet.create içinde tanımlanır ve component'e style property'si ile verilir.
