// // Çalıştırmak için npx expo start


// import { StyleSheet, Text, View} from 'react-native';

// export default function App(){
//   return(
//     <View style = {styles.container}>
//       <Text> Deneme Yazısı!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 25,
//     color: `#222`,
//     fontWeight: `bold`
//   }
// });

// // const değeri değişmeyecek değişkenler için. let ise değeri sonradan değiştirilebilecekler için.

// const _name = "İbrahim";
// let _ID = 23

// console.log(`İsim:${_name} ve ID:${_ID}`);

// // Array: Birden çok değeri sıralı biçimde tutar.

// const technologies = ["React Native", "Expo", "TypeScript"];
// // İlk elemanın indeksi sıfır.

// console.log(technologies[0]);
// console.log(technologies.length);


// // - Object -

// // Object, birbirleriyle ilişkili bilgileri ad-değer çiftleri hâlinde tutar.
// // Mobil uygulamalarda kullanıcı, ürün veya mesaj gibi varlıkları temsil etmek için en çok kullanılan yapıdır.

// const student = {
//   id: 1,
//   name: "İbrahim",
//   department: "Computer Engineering",
//   grade: 3
// };

// console.log(student.id);
// console.log(student.name);
// console.log(student.department);
// console.log(student.grade);

// // Object Arrayler sık sık karşılaşacağımız bir yapıdır.

// const students = [ { id: 1, name: "Ali", grade: 1},
//                    { id: 2, name: "İbrahim", grade: 3},
//                    { id: 3, name: "Elif", grade: 4} ]

            
//     // Function
// function greet(name: string){
//   return `greet ${name}`;
// }

//     // Arrow Function
// const greet2 = (name: string) => {
//   return `Merhaba ${name}`;
// }

// const greet3 = (name: string) => {return `Merhaba ${name}`;};

// // Üç fonksiyonda aynı işi yapar. Ama sonuncusu oldukça yaygındır.

// // map(), bir array'in her elementini dönüştürerek yeni bir array üretir. Özgün array değişmez.

// const numbers = [1, 2, 3];
// const doubled = numbers.map(number => number * 2);

// console.log(doubled);

// // filer(), bir koşulu sağlayan elemenlerden yeni bir array oluşturur.

// const numbers2 = [ 1, 2, 3, 4, 5];
// const result = numbers2.filter(numbers2 => numbers2 > 3);
// console.log(result);

// // find(), koşulu sağlayan ilk elemnti döndürür. Sonuç bir array değil, tek bir elementtir.

// // students dizisindeki elemanları sırayla tarar ve id'si 2 olanı student2 değişkenine atar.
// const student2 = students.find(item => item.id === 2);
// // student2'ye atanan objenin name propety'si ekrana yazdırılır.
// console.log(student.name);

// // ÖNEMLİ: Karşılaştırmalarda == yerine === kullanınız. === hem değeri hem de
// // tipi karşılaştırır ve beklenmedik sonuçları önler.

// // Spread Operator
// // Üç nokta ... yazımı, var olan bir arrayin elementlerini kendisini değiştirmeden
// // yeni bir arrayin içine açar.
// // ÖNEMLİ: Rest Parametresi ile Spread Operatörü kullanıldığı bağlama göre iki farklı isim alır.
// // Görünüşleri aynı olsa da işlevleri birbirinin tam tersidir.


// const oldItems = [1, 2, 3];
// const newItems = [...oldItems, 4];
// console.log(newItems);

// // Destructuring
// // Bir object'in property'leri tek satırda ayrı variable'lara aktarılabilir.

// const student3 = {
//   name: "Ali",
//   age: 21
// };

// const {name, age} = student3;
// console.log(name);

// // DESTRUCTURING (Yapı Bozma): Bir dizi veya nesneden belirli değerleri kolayca
// // değişkenlere ayırarak almayı sağlar.

// // dizi bozarken [], nesne bozarken {}
// /* */

// /////////////////////////////////////

// // View  Container'dır; içine başka component'ler alır ve layout'u taşır.
// // Text  Metin gösterir. Ekrandaki her metin bir Text içinde olmalıdır.
// // Pressable  Dokunulabilir alan oluştrur; dokunulduğunda bir gunction çalıştırır.
// //  Görsel gösterir. Bu hafta detaylı anlatılmayacak.


// // 5.2 StyleSheet

// // Stiller StyleSheet.create içinde tanımlanır ve component'e style property'si ile verilir.

// /////////////////////////////////////////////////////////////////////

// // React Native'de yazı biçimi camelCase olmalıdır. Ayrıca fontSize: 20px yazımı geçersizdir.
// // fontSize: 20 doğru olan biçimdir.

// YATAY KART ÖRNEĞİ //

// Üç kutuyu yan yana yerleştirelim.

// import {StyleSheet, Text, View} from 'react-native';

// const technologies = ['React Native', 'Expo', 'TypeScript'];

// export default function App(){
//   return(
//     <View style={styles.container}>
//       <View style={styles.row}>
//         {technologies.map(tech => (
//           <View key={tech} style={styles.box}>
//             <Text style={styles.boxText}>{tech}</Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center'
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-around'
//   },
//   box: {
//     backgroundColor: '#E5E7EB',
//     paddingVertical: 14,
//     paddingHorizontal: 10,
//     borderRadius: 8,
//     width: 100,
//     alignItems: 'center'
//   },
//   boxText: {
//     fontSize: 13,
//     color: '#1F2937'
//   }
// });
///////////////////////////////////////////////

// Bir profil kartı yapalım.

// import {Pressable, StyleSheet, Text, View} from 'react-native';

// const student = {
//   name: "İbrahim Yıldırım",
//   department: "Bilgisayar Mühendisliği",
//   grade: 3
// };

// export default function App(){
//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <Text style={styles.name}>{student.name}</Text>
//         <Text style={styles.info}>{student.department}</Text>
//         <Text style={styles.info}>{student.grade}. Sınıf</Text>
//         <Pressable
//           style={styles.button}
//           onPress={() => console.log("Profil Görüntülendi.")}
//         >
//           <Text style={styles.buttonText}>Profili Gör</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F3F9",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   card: {
//     backgroundColor: "#FFFFFF",
//     width: 280,
//     padding: 24,
//     borderRadius: 16,
//     alignItems: "center"
//   },
//   name: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#1F2937"
//   },
//   info: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#1F29"
//   },
//   button: {
//     backgroundColor: "#7B1E3A",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     marginTop: 16
//   },
//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 15,
//     fontWeight: "bold"
//   }
// });
// //////////////////////////////////////////////////


// // Dokuz Çözümlü Örnek
// import {StyleSheet, Text, View} from "react-native";

// const technologies = ["React", "Expo", "TypeScript", "JavaScript", "Node"];

// const lastTechnologies = technologies.filter(technologies => technologies.length > 5);


// export default function App(){
//   return (
//     <View style = {styles.container}>
//       <View style = {styles.row}>
//         {lastTechnologies.map(tech => (
//           <View key = {tech} style = {styles.box}>
//             <Text style = {styles.boxText}>{tech}</Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center"
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-around"
//   },
//   box: {
//     backgroundColor: "#E5E7EB",
//     paddingVertical: 14,
//     paddingHorizontal: 10,
//     borderRadius: 8,
//     width: 100,
//     alignItems: "center"
//   },
//   boxText: {
//     fontSize: 13,
//     color: "#1F29"
//   }
// });

// // Filter() : Bir koşulu sağlayan elementlerden yeni bir array oluşturur.
// // Map() : Bir array'in her elementini dönüştürerek yeni bir array üretir. Özgün array değişmez.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ödev: React Native ve Expo kullanarak tek ekranlı bir kişisel profil uygulaması geliştiriniz. Uygulama kendi bilgilerinizi göstermelidir.
// Ad soyad, bölüm ve sınıf bilgisi ekranda görünmelidir.
// En az üç ilgi alanı gösterilmelidir.
// En az bir pressable bulunmalı ve dokunulduğunda console.log ile bir ileti yazdırılmalıdır.
// Kişisel bilgiler bir JavaScript object'i içinde tutulmalıdır.
// İlgi alanları bir array içinde tutulmalı ve ekrana map() ile basılmalıdır.
// Stiller StyleSheet ile tanımlanmalıdır.
// Layout'ta FlexBox kullanılmalıdır.
// margin, padding ve borderRadius property'leri kullanılmalıdır.

import {Pressable, StyleSheet, Text, View} from "react-native";

const student = {
  name: "İbrahim Halil Yıldırım",
  department: "Computer Engineering",
  grade: 3,
  interests: ["Photographing,", " Running,", " Reading"]
}

const interestsFinal = student.interests.map(interests => student.interests);

export default function App(){
  return(
    <View style = {styles.container}>
      <View style = {styles.infoCard}>
        <Text style = {styles.infoCard}>{student.name}</Text>
        <Text style = {styles.infoCard}>{student.department}</Text>
        <Text style = {styles.infoCard}>{student.grade}</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.log("Tuşa basıldı.")}
        >
          <Text style = {styles.button}>Tuş</Text>
        </Pressable>
      </View>
        <Text style = {styles.interestsCard}>{interestsFinal}</Text>
    </View>
  );
}
console.log(interestsFinal);
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ekranın tamamını kaplar.
    justifyContent: "center", // Dikeyde merkezler.
    alignItems: "center" // Yatayda merkezler.
  },
  infoCard: {
    backgroundColor: "rgb(20, 109, 198)",
    width: 280,
    padding: 24,
    borderRadius: 16,
    alignItems: "center"
  },
  interestsCard: {
    backgroundColor: "rgb(229, 157, 40)",
    width: 280,
    padding: 24,
    borderRadius: 16,
    alignItems: "center"
  },
  button: {
    backgroundColor: "rgba(129, 216, 148, 0.2)",
    paddingVertical: 21,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 18
  }
});
