// // Çalıştırmak için cd IlkMobilUygulamam ve ardından npx expo start

// / / / //  // / / / / / / / // import { useState } from "react";

// import { Pressable } from "react-native";

// import { Pressable } from "react-native";

// import { Pressable } from "react-native";


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
//     fontWeight: ``
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
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import {Pressable, StyleSheet, Text, View} from "react-native";

// const student = {
//   name: "İbrahim Halil Yıldırım",
//   department: "Computer Engineering",
//   grade: 3,
//   interests: ["Photographing,", " Running,", " Reading"]
// }

// const interestsFinal = student.interests.map(interests => student.interests);

// export default function App(){
//   return(
//     <View style = {styles.container}>
//       <View style = {styles.infoCard}>
//         <Text style = {styles.infoCard}>{student.name}</Text>
//         <Text style = {styles.infoCard}>{student.department}</Text>
//         <Text style = {styles.infoCard}>{student.grade}</Text>
//         <Pressable
//           style={styles.button}
//           onPress={() => console.log("Tuşa basıldı.")}
//         >
//           <Text style = {styles.button}>Tuş</Text>
//         </Pressable>
//       </View>
//         <Text style = {styles.interestsCard}>{interestsFinal}</Text>
//     </View>
//   );
// }
// console.log(interestsFinal);
// const styles = StyleSheet.create({
//   container: {
//     flex: 1, // Ekranın tamamını kaplar.
//     justifyContent: "center", // Dikeyde merkezler.
//     alignItems: "center" // Yatayda merkezler.
//   },
//   infoCard: {
//     backgroundColor: "rgb(20, 109, 198)",
//     width: 280,
//     padding: 24,
//     borderRadius: 16,
//     alignItems: "center"
//   },
//   interestsCard: {
//     backgroundColor: "rgb(229, 157, 40)",
//     width: 280,
//     padding: 24,
//     borderRadius: 16,
//     alignItems: "center"
//   },
//   button: {
//     backgroundColor: "rgba(129, 216, 148, 0.2)",
//     paddingVertical: 21,
//     paddingHorizontal: 10,
//     borderRadius: 8,
//     marginTop: 18
//   }
// });


// Ödev Güncel

// import {Pressable, StyleSheet, Text, View} from "react-native";

// const student = {
//   name: "İbrahim Halil Yıldırım",
//   department: "Computer Engineering",
//   grade: 3
// };

// export default function App(){
// return(
//    <View style = {styles.container}>
//     <View style = {styles.card}>
//       <Text style = {styles.name}>{student.name}</Text>
//       <Text style = {styles.info}>{student.department}</Text>
//       <Text style = {styles.info}>{student.grade}.Sınıf</Text>

//       <Pressable
//         style = {styles.button}
//         onPress = {() => console.log("Profil Görüntülendi.")}
//       >
//         <Text style = {styles.buttonText}>Profili Gör</Text>
//       </Pressable>
//     </View>
//    </View>  
//  );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor: "#F3F4F6",
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
//     fontSize: 15,
//     color: "#4B5563",
//     marginTop: 4
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

// const oldItems = [1,2,3];
// const newItems = [...oldItems,4];
// console.log(newItems);

// Ödev Güncel Güncel.

// import {Pressable, StyleSheet, Text, View} from "react-native";

// const student = {
//   name: "İbrahim Halil Yıldırım",
//   department: "Computer Engineering",
//   grade: 3,
// };

// const interests = [
//   "Photographing",
//   "Running",
//   "Developing"
// ]

// export default function App(){
//   return (
//     <View style = {styles.container}>
//       <View style = {styles.card}>
//         <Text style = {styles.name}>{student.name}</Text>
//         <Text style = {styles.department}>{student.department}</Text>
//         <Text style = {styles.grade}>{student.grade}</Text>

//         <Pressable
//           style = {styles.button}
//           onPress = {() => console.log("Tuşa basıldı.")}
//         >
//           <Text style = {styles.buttonText}>Kontrol Tuşu</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor: "#F3F4F6",
//     justifyContent: "center",
//     alignItems: "center"
//   },

//   card: {
//     backgroundColor: "rgba(23, 89, 219, 0.2)",
//     width: 280,
//     padding: 24,
//     borderRadius: 16,
//     alignItems: "center"
//   },

//   name: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "rgb(64, 0, 128)"
//   },

//   department: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "rgb(177, 157, 0)"
//   },

//   grade: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "rgba(30, 108, 148, 0.85)"
//   },

//   button: {
//     backgroundColor: "#7B1E3A",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 50,
//     marginTop: 20
//   },

//   buttonText: {
//     color: "rgba(19, 226, 171, 0.61)",
//     fontSize: 15,
//     fontWeight: "bold"
//   }
// });

// İlk State Uygulaması

// import {Pressable, StyleSheet, Text, View} from "react-native";
// import {useState} from "react";
// export default function App(){
//   const [count, setCount] = useState(0);

//   return (
//     <View style = {styles.container}>
//       <Text style = {styles.count}>{count}</Text>
//     <View style = {{flexDirection: "row"}}>
//        <Pressable
//         style = {styles.button}
//         onPress = {() => setCount(count + 1)}
//       >
//         <Text style = {styles.buttonText}>Artır</Text>
//       </Pressable>

//       <Pressable
//         style = {styles.button}
//         onPress = {() => setCount(count - 1)}
//       >
//         <Text style = {styles.buttonText}>Azalt</Text>
//       </Pressable>
//     </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   count: {
//     fontSize: 40,
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: "yellow",
//     padding: 15,
//     borderRadius: 35,
//   },
//   buttonText: {
//     color: "orange",
//     fontSize: 18
//   }
// })

// UYGULAMA Tekrar Kullanılabilir Öğrenci Kartı

// import {StyleSheet, Text, View} from "react-native";

// interface Student {
//   id: number;
//   name: string;
//   department: string;
//   grade: number
// }

// interface StudentCardProps {
//   name: string;
//   department: string;
//   grade: number;
// }

// const students: Student[] = [
//   {
//     id: 1,
//     name: "Ali Yıldz",
//     department: "Bilgisayar Mühendisliği",
//     grade: 2
//   },
//   {
//     id: 2,
//     name: "Ayşe Demir",
//     department: "Bilgisayar Mühendisliği",
//     grade: 3
//   },
//   {
//     id: 3,
//     name: "Mehmet Kaya",
//     department: "Yazılım Mühendisliği",
//     grade: 1
//   }
// ];

// function StudentCard({name, department, grade} : StudentCardProps) {
//   return (
//     <View style = {styles.card}>
//       <Text style = {styles.name}>{name}</Text>
//       <Text style = {styles.info}>{department}</Text>
//       <Text style = {styles.info}>{grade}. Sınıf</Text>
//     </View>
//   );
// }

// export default function App(){
//   return (
//     <View style = {styles.container}>
//       <Text style = {styles.title}>Öğrenci Listesi</Text>

//       {students.map(student => (
//         <StudentCard
//           key = {student.id}
//           name = {student.name}
//           department = {student.department}
//           grade = {student.grade}
//         />
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F3F4F6",
//     paddingTop: 60,
//     alignItems: "center"
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#1F2937",
//     marginBottom: 16
//   },
//   card: {
//     backgroundColor: "#FFFFFF",
//     width: 300,
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 12
//   },
//   name: {
//     fontSize: 17,
//     fontWeight: "bold",
//     color: "#7B1E3A"
//   },
//   info: {
//     fontSize: 14,
//     color: "#4B5563",
//     marginTop: 3
//   }
// });


// UYGULAMA Basit Sayaç

import {useState} from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App(){
  const [count, setCount] = useState(0);

  return (
    <View style = {styles.container}>
      <Text style = {styles.label}>Sayaç</Text>
      <Text style = {styles.count}>{count}</Text>

      <View style = {styles.row}>
        <Pressable
          style = {styles.button}
          onPress = {() => setCount(count - 1)}
        >
          <Text style = {styles.buttonText}>-</Text>
        </Pressable>

        <Pressable
          style = {styles.button}
          onPress = {() => setCount(0)}
        >
          <Text style = {styles.buttonText}>Sıfırla</Text>
        </Pressable>

        <Pressable
          style = {styles.button}
          onPress = {() => setCount(count + 1)}
        >
          <Text style = {styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center"
  },
  label: {
    fontSize: 16,
    color: "#4B5563"
  },
  count: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#7B1E3A",
    marginVertical: 12
  },
  row: {
    flexDirection: "row",
    marginTop: 8
  },
  button: {
    backgroundColor: "#7B1E3A",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 6
  },
  buttonText: {
    color: "#FFFFF",
    fontSize: 16,
    fontWeight: "bold"
  }
});
// Bir component'i birden çok kez kullandığımızda ne olur? Her kullanım kendi state'ine sahip olur. Bunu bir beğeni butonu ile görelim.

// import {Pressable, StyleSheet, Text, View} from "react-native";
// import {useState} from "react";

// interface PostCardProps {
//   title: string;
// }

// function PostCard({title} : PostCardProps){
//   const [likes, setLikes] = useState(0);

//   return (
//     <View style = {styles.card}>

//       <Text style = {styles.cardTitle}>{title}</Text>
//       <Text style = {styles.likeText}>Beğeni: {likes}</Text>

//       <Pressable

//         style = {styles.button}
//         onPress = {() => setLikes(likes + 1)}
//         >
//         <Text style = {styles.buttonText}>Beğen</Text>
//         </Pressable>
//     </View>
//   );
// }

// export default function App(){
//   return (
//     <View style = {styles.container}>
//       <PostCard title = "React Native" /> 
// {/* Burada PostCard component'i iki kez kullanılıyor ancak her biri kendi state'ine sahip. */}
//       <PostCard title = "TypeScript" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F3F4F6",
//     justifyContent: "center",
//   },
//   card: {
//    backgroundColor: "rgba(121, 147, 16, 0.66)",
//    width: 300,
//    padding: 16,
//    borderRadius: 12,
//    marginBottom: 12
//   },
//   cardTitle: {
//     fontWeight: "bold"
//   },
//   button: {
//     backgroundColor:  "rgba(0, 112, 224, 0.79)",
//     paddingVertical: 13,
//     paddingHorizontal: 25,
//     borderRadius: 2,
//     marginHorizontal: 6
//   },
//   buttonText: {
//     color: "#FFFF",
//     fontSize: 16,
//     fontWeight: "bold"
//   },
//   likeText: {
//     backgroundColor: "rgba(209, 82, 18, 0.89)"
//   }
// })

// // UYGULAMA Ders Kartları Uygulaması 
// import{Pressable, View, Text, StyleSheet} from "react-native";
// import {useState} from "react";

// interface Course {
//   id: number;
//   name: string;
//   instructor: string;
//   credit: number;
// }

// function CourseCard({name, instructor, credit} : CourseCardProps) {
//   return (
//     <View>
//       <Text style = {styles.name}>{name}</Text>
//       <Text style = {styles.info}>{instructor}</Text>
//       <Text style = {styles.info}>{credit}</Text>
//     </View>
//   );
// }
// interface CourseCardProps {
//   name: string;
//   instructor: string,
//   credit: number
// }

// const courses : Course[] = [
//   {
//     id: 1,
//     name: "Veri Yapıları",
//     instructor: "Fatih Kocamaz",
//     credit: 6 
//   },
//   {
//     id: 2,
//     name: "Veri Tabanı Yönetim Sistemleri",
//     instructor: "Arif Aydın",
//     credit: 7
//   },
//   {
//     id: 3,
//     name: "Otomata",
//     instructor: "Abdullah Ateş",
//     credit: 18
//   }
// ]

// export default function App(){
//   return (
//     <View style = {styles.container}>
//       <Text style = {styles.baseTitle}> Derslerim </Text>
    
//       {courses.map(course => (
//         <CourseCard

//       ))}

//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F3F4F6",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   info: {
//     backgroundColor: "rgba(208, 151, 37, 0.81)",
//     width: 300,
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 12
//   },
//   name: {
//     color: "rgb(8, 103, 198)",
//     fontSize: 15,
//     fontWeight: "bold"
//   },
//   baseTitle: {
//     color: "rgba(125, 23, 227, 0.8)",
//     fontSize: 30,
//     fontWeight : "bold"
//   } 
// })

// // Yetersiz hissedildiğinden dolaryı hafta 1 ve hafta 2 tekrarı.

// import {StyleSheet, Text, View} from "react-native";

// export default function App(){
//   return (
//     <View style = {styles.container}>
//       <Text>Hafta 1 tekrarı.</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,  // container içinde boşluğu ne kadar dolduracağını belirler.
//     justifyContent: "center", // Ögelerin yatayda nasıl hizalanacağıni belirler.
//     alignItems: "center" // Ögelerin dikeyde nasıl hizalanacağını beliler. 
//   }
// });

// map(), bir array'in her elementini dönüştürerek yeni bir array oluşturur. Özgün array değişmez.

// filter(), bir koşulu sağlayan elementlerden yeni bir array oluşturur.

// find(), koşulu sağlayan ilk elementi döndürür.

// Karşılaştırmalarda == değil === kullan. Hem değeri hem de tipi kontrol eder.

// Destructuring

// Border : Kenar.

// margin : Component'in dış boşluğu.
// padding : Component'in iç boşluğu.

// React Native'de component'lerin ekrandaki layout'u FlexBox ile belirlenir.
// flex, flexDirection, justifyContent, alignItems

// UYGULAMA Yatay Kart Örneği

// import {StyleSheet, View, Text} from "react-native";

// const technologies = ["React Native", "Expo", "TypeScript"];

// export default function App(){
//   return (
//     <View style = {styles.container}>
//       <View style = {styles.row}>
//         {technologies.map(tech => (
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
//     justifyContent: "center",
//     alignItems: "center"
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
//     color: "#1F2937"
//   }
// });

// // UYGULAMA İlk Mobil Profil Kartı

// import {Pressable, StyleSheet, Text, View} from "react-native";

// const student = {
//   name: "İbrahim Halil Yıldırım",
//   department : "Bilgisayar Mühendsiliği",
//   grade: 3
// };

// export default function App(){
//   return (
//     <View style = {styles.container}>
//       <View style = {styles.card}>
//         <Text style = {styles.name}>{student.name}</Text>
//         <Text style = {styles.info}>{student.department}</Text>
//         <Text style = {styles.info}>{student.grade}</Text>

//         <Pressable
//           style = {styles.button}
//           onPress = {() => console.log("Profil Görüntülendi.")}
//         >
//           <Text style = {styles.buttonText}>Profili Gör</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F3F",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   card: {
//     backgroundColor: "#2342",
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
//     fontSize: 15,
//     color: "#4B5563",
//     marginTop: 4
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

// // ÇÖZÜMLÜ UYGULAMA Uzunluğu beş karakterden büyük kelimeleri kartlarda gösteren uygulama.

// const technologies = [
//   "React", "Expo", "TypeScript", "JavaScript", "Node"
// ];

// // Çözümde filter(), map() kullanılmalı.
// import {StyleSheet,Pressable, View, Text} from "react-native";

// const filteredTechnologies = technologies.filter(tech =>
//   tech.length > 5); // diziyi filtreliyoruz ve karakter uzunluğu beşten büyük olanları yeni bir diziye ekliyoruz.

// console.log({technologies});
// console.log({filteredTechnologies});

// export default function App(){
//   return(
//     <View style = {styles.container}>
//       <Text style = {styles.titleText}>Karakter Sayısı Beşten Büyük Olanlar</Text>
//       <Text style = {styles.text}>{filteredTechnologies}</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#00ba66d4"
//   },
//   titleText: {
//     color: "blue",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: 20,
//     fontWeight: "bold"
//   },
//   text: {
//   color: "black",
//   fontSize: 15,
//   justifyContent: "space-around"
//   }
// })

// // ALIŞTIRMA KOLAY

// import {View, Text, StyleSheet} from "react-native";

// const student = {
//   name: "İbrahim Halil Yıldırım",
//   department: "Computer Engineering",
//   grade: 3
// }

// export default function App(){
//   return (
//     <View style = {styles.container}>
//       <View style = {styles.card}>
//         <Text style = {styles.text}>{student.name}</Text>
//         <Text style = {styles.text}>{student.department}</Text>
//         <Text style = {styles.text}>{student.grade}</Text>
//       </View>
//     </View>
//   )
// }


// // container, card, text
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "rgb(16, 98, 181)"
//   },
//   card: {
//     alignItems: "center",
//     justifyContent: "center",
//     width: 300,
//     height: 150,
//     backgroundColor: "#9aadc1",
//     borderRadius: 20 
//   },
//   text: {
//     fontSize: 15,
//     fontWeight: "bold",
//     color: "black"
//   }
// })

// ALIŞTIRMA KOLAY

// import {StyleSheet, View} from "react-native";

// export default function App(){
//   return(
//     <View style = {styles.container}>
//       <View style = {styles.generalZone}>
//         <View style = {styles.boxOne}></View>
//         <View style = {styles.boxTwo}></View>
//         <View style = {styles.boxThree}></View>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   generalZone: {
//     alignItems: "center",
//     justifyContent: "space-around",
//     flexDirection: "row",
//     width: 300,
//     height: 200,
//     backgroundColor: "rgba(117, 53, 103, 0.82)"
//   },
//   boxOne: {
//     justifyContent: "center",
//     alignItems: "center",
//     width: 75,
//     height: 75,
//     backgroundColor: "yellow"
//   },
//   boxTwo: {
//     justifyContent: "center",
//     alignItems: "center",
//     width: 75,
//     height: 75,
//     backgroundColor: "blue"
//   },
//   boxThree: {
//     justifyContent: "center",
//     alignItems: "center",
//     width: 75,
//     height: 75,
//     backgroundColor: "red"
//   }
// });

// // ALIŞTIRMA ORTA

// // odd: tek, even: çift

// const numberArray = [3,8,12,5,7,20];

// const evenNumbers = numberArray.filter(number => number % 2 === 0);

// console.log(evenNumbers);

// // ALIŞTIRMA ORTA
// import {Pressable, View, Text, StyleSheet} from "react-native";

// const students = ["Ali", "Ayşe", "Mehmet", "Zeynep"];

// export default function App(){
//   const newStudentArray = students.map((student) => (
//     <Text key = {student}> {student} </Text>))
  
//   return (
//     <View style = {styles.container}>
//       <Text style = {styles.title}>   Öğrenciler</Text>
//       <View style = {styles.card}>
//         {newStudentArray}
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "column"

//   },
//   title: {
//     fontSize: 30,
//     fontWeight: "bold",
//     paddingTop: 10,
//     color: "red",
//     width: 180,
//     height: 100,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   baseText: {
//     fontSize: 15,
//     color: "black",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   card: {
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "space-around",
//     backgroundColor: "#5dc2db54",
//     borderRadius: 20,
//     width: 100,
//     height: 200
//   }
// })

// // ALIŞTIRMA ZOR

// import {View, Text, StyleSheet} from "react-native";

// const products = [
//   {id: 1, name: "Kulaklık", price: 850},
//   {id: 2, name: "telefon", price: 24000},
//   {id: 3, name: "Klavye", price: 1200},
//   {id: 4, name: "Mouse", price: 600}
// ];

// const expensiveProducts = products.filter(product => product.price > 1000);

// export default function App(){
//   return (
//     <View style = {styles.container}>
//       <View style = {styles.cardContainer}>
//         {expensiveProducts.map(product => (
//           <View key = {product.id} style = {styles.productCard}>
//             <Text style = {styles.productName}>{product.name}</Text>
//             <Text style = {styles.productPrice}>{product.price}</Text>
//         </View>
//         ))}
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create ({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   cardContainer: {
//     backgroundColor: "#12844d91",
//     width: 400,
//     height: 600,
//     borderRadius: 20,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   productName: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#333"
//   },
//   productPrice: {
//     fontSize: 15,
//     color: "#green",
//     marginTop: 5
//   },
//   productCard: {
//     backgroundColor: "white",
//     padding: 15,
//     marginVertical: 10,
//     borderRadius: 10,
//     width: 250,
//     alignItems: "center"
//   }
// });

// // HAFTA 1 ÖDEV

// import {Pressable, View, StyleSheet, Text} from "react-native";
// // map() function'ı sadece dizilerle çalışır. Object'lerle çalışmaz.
// const student = {
//   name: "İbrahim Halil Yıldırım",
//   department: "Computer Engineering",
//   grade: "3",
// }

// const interests = ["Photographing", "Running", "Reading"]

// export default function App(){
//   return (
//     <View style = {styles.container}>
//       <View style = {styles.infoCard}>
//         <Text style = {styles.nameText}>{student.name}</Text>
//         <Text style = {styles.text}>{student.department}</Text>
//         <Text style = {styles.text}>{student.grade}</Text>
      
//         {interests.map(elements => (
//           <Text style = {styles.text}>{elements}</Text>)
//         )}
//         </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   infoCard: {
//     backgroundColor: "#a1ebab",
//     alignItems: "center",
//     justifyContent: "center",
//     width: 300,
//     height: 300
//   },
//   text: {
//     fontSize: 15,
//     color: "black",
//   },
//   nameText: {
//     fontSize: 30,
//     fontWeight: "bold",
//     color: "grey"
//   }
// })

// Değişken tanımlarken türünü dilin kendisinin anlamasına type inference (tip çıkarımı) denir.

// interface bir object'in hangi property'lere sahip olacağını ve her property'nin tipinin ne olduğunu tanımlar.

// interface Student {
//   name: string;
//   grade: number;
// }


// interface Student {
//     id: number;
//     name: string;
//     department: string;
// }
// const students: Student[] = [
// {    id: 1,
//     name: "Ali",
//     department: "Bilgisayar Mühendisliği"
// },
// {
//     id: 2,
//     name: "Ayşe",
//     department: "Bilgisayar Mühendisliği"
// }
// ];

// export default function App(){
//     {students.map(student => (
//         <StudentCard
//             key = {student.id}
//             name = {student.name}
//             department = {student.department}
//         />
//     ))}
// }

// Props dışarıdan gelir ve component onu değiştiremez.
// import {useState} from "react";

// import {View, Text, StyleSheet, Pressable} from "react-native";
// import {useState} from "react";


// export default function App(){

//     const [count, setCount] = useState(0);

//     return(
//         <View style = {styles.container}>
//                 <Text style = {styles.count}>{count}</Text>
//             <View style = {styles.buttonContainer}>
//                   <Pressable
//                     style = {styles.button}
//                     onPress = {() => setCount(count + 1)}
//                     >
//                     <Text style = {styles.buttonText}>Artır</Text>
//                   </Pressable>
//                   <Pressable
//                     style = {styles.button}
//                     onPress = {() => setCount(count - 1)}
//                     >
//                     <Text style = {styles.buttonText}>Azalt</Text>
//                  </Pressable>
//             </View>
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "space-between",
//     },
//     buttonContainer:{
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "space-between",
//         flexDirection: "row",
//         width: 150
//     },
//     buttonText: {
//         fontSize: 15,
//         color: "black"
//     },
//     button: {
//         justifyContent: "center",
//         alignItems: "center",
//         width: 50,
//         height: 50,
//         backgroundColor: "#60aaac4e"
//     },
//     count: {
//         fontSize: 50,
//         color: "red",
//         paddingTop: 200,
//     }
// })

// const [loggedIn, setLoggedIn] = useState(false);

// {loggedIn ? (
//     <Text> Hoş Geldiniz.</Text>
// ) : (
//     <Text> Giriş Yapınız.</Text>
// )}

// <Pressable
//     style = {loggedIn ? styles.buttonOn : styles.button}
// ></Pressable>

// import {StyleSheet, Text, View} from "react-native";

// interface Student {
//     id: number,
//     name: string,
//     department: string,
//     grade: number;
// }
// interface StudentCardProps {
//     name: string;
//     department: string;
//     grade: number;
// }

// const students: Student[] = [
//     {
//         id: 1,
//         name: "Ali Yıldız",
//         department: "Bilgisayar Mühendisliği",
//         grade: 2
//     },
//     {
//         id: 2,
//         name: "Ayşe Demir",
//         department: "Bilgisayar Mühendisliği",
//         grade: 3
//     },
//     {
//         id: 3,
//         name: "Mehmet Kaya",
//         department: "Yazılım Mühendisliği",
//         grade: 1
//     }
// ];

// function StudentCard({name, department, grade
// } : StudentCardProps) {
//     return (
//         <View style = {styles.card}>
//             <Text style = {styles.name}>{name}</Text>
//             <Text style = {styles.info}>{department}</Text>
//             <Text style = {styles.info}>{grade}</Text>
//         </View>
//     );
// }

// export default function App(){
//     return (
//         <View style = {styles.container}>
//             <Text style = {styles.title}>Öğrenci Listesi</Text>

//             {students.map(student => (
//                 <StudentCard
//                     key = {student.id}
//                     name = {student.name}
//                     department = {student.department}
//                     grade = {student.grade}
//                 />
//             ))}
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#F3F4F6",
//         paddingTop: 60,
//         alignItems: "center"
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: "bold",
//         color: "#1F2937",
//         marginBottom: 16
//     },
//     card: {
//         backgroundColor: "FFFFFF",
//         width: 300,
//         padding: 16,
//         borderRadius: 12,
//         marginBottom: 12
//     },
//     name: {
//         fontSize: 17,
//         fontWeight: "bold",
//         color: "#7B1E3A"
//     },
//     info: {
//         fontSize: 14,
//         color: "#4B5563",
//         marginTop: 3
//     }
// });

// import {Pressable, View, StyleSheet, Text} from "react-native";
// import {useState} from "react";

// export default function App(){
//     const [count, setCount] = useState(0);

//     return (
//         <View style = {styles.container}>
//             <Text style = {styles.label}>Sayaç</Text>
//             <Text style = {styles.count}>{count}</Text>

//             <View style = {styles.row}>
//                 <Pressable
//                     style = {styles.button}
//                     onPress={() => setCount(count - 1)}
//                 >
//                     <Text style = {styles.buttonText}>-</Text>
//                 </Pressable>
                
//                 <Pressable
//                     style = {styles.button}
//                     onPress = {() => setCount(0)}
//                 >
//                     <Text style = {styles.buttonText}>Sıfırla</Text>
//                 </Pressable>

//                 <Pressable
//                     style = {styles.button}
//                     onPress = {() => setCount(count + 1)}
//                 >
//                     <Text style = {styles.buttonText}>+</Text>
//                 </Pressable>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#F3F4F6",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     label: {
//         fontSize: 16,
//         color: "#4B5563",
//     },
//     count: {
//         fontSize: 64,
//         fontWeight: "bold",
//         color: "#7B1E3A",
//         marginVertical: 12
//     },
//     row: {
//         flexDirection: "row",
//         marginTop: 8
//     },
//     button: {
//         backgroundColor: "7B1E3A",
//         paddingVertical: 12,
//         paddingHorizontal: 20,
//         borderRadius: 8,
//         marginHorizontal: 6
//     },
//     buttonText: {
//         color: "#000000",
//         fontSize: 16,
//         fontWeight: "bold"
//     }
// });

// // Bir component'i birden çok kez kullandığımızda ne olur? Her kullanılm kendi state'ine shaip olur. Bunu bir beğeni butonu ile görelim.

// import {Pressable, Text, View, StyleSheet} from "react-native";
// import {useState} from "react";


// interface PostCardProps {
//     title: string;
// }
// function PostCard({title}: PostCardProps){
//     const [likes, setLikes] = useState(0);
//     return (
//         <View style = {styles.card}>
//             <Text style = {styles.cardTitle}>{title}</Text>
//             <Text style = {styles.likeText}>Beğeni: {likes}</Text>

//             <Pressable
//                 style = {styles.button}
//                 onPress = {() => setLikes(likes + 1)}
//             >
//                 <Text style = {styles.buttonText}>Beğen</Text>
//             </Pressable>
//         </View>
//     );
// }
// export default function App(){
//     return (
//         <View style = {styles.container}>
//             <PostCard title = "React Native" />
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     buttonText: {
//         fontSize: 15,
//         color: "black"
//     },
//     button: {
//         backgroundColor: "rgba(152, 168, 136, 0.31)",
//         width: 100,
//         height: 100
//     },
//     cardTitle: {
//         fontSize: 40,
//         fontWeight: "bold",
//         color: "#5e7172"
//     },
//     likeText: {
//         fontSize: 20,
//         color: "yellow"
//     },
//     card: {
//         backgroundColor: "grey",
//         width: 300,
//         height: 300
//     }
// })

// // ALIŞTIRMA DERS KARTLARI UYGULAMASI
// import {StyleSheet, View, Text, Pressable} from "react-native";
// import {useState} from "react";

// interface Course {
//     id: number;
//     name: string;
//     instructor: string;
//     credit: number,
// }

// interface CourseCardProps {
//     name: string;
//     instructor: string;
//     credit: number;
// }

// function CourseCard ({name, instructor, credit} : CourseCardProps){
//     const [favourite, setFavourite] = useState(false);

//     return (
//         <View style = {styles.card}>
//             <Text style = {styles.nameText}>{name}</Text>
//             <Text style = {styles.infoText}>{instructor}</Text>
//             <Text style = {styles.infoText}>{credit}</Text>

//             <Pressable style = {styles.button}
//                 onPress = {() => setFavourite(!favourite)}
//             >
//                 <Text> {favourite ? "Favorilerden çıkar." : "Favorilere ekle."}</Text>
//             </Pressable>
//         </View>
//     );
// }

// const courses: Course[] = [
//     {
//         id: 1,
//         name: "Veri Yapıları",
//         instructor: "Adnan Fatih Kocamaz",
//         credit: 7
//     },
//     {
//         id: 2,
//         name: "Veri Tabanı Yönetim Sistemleri",
//         instructor: "Ahmet Arif Aydın",
//         credit: 6
//     },
//     {
//         id: 3,
//         name: "İşletim Sistemleri",
//         instructor: "Abdullah Ateş",
//         credit: 5
//     }
// ];

// export default function App(){
//     return (
//         <View style = {styles.container}>
//             {courses.map(course => (
//                 <CourseCard
//                     key = {course.id}
//                     name = {course.name}
//                     instructor = {course.instructor}
//                     credit = {course.credit}
//                 />
//             ))}
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     cardTitle: {
//         fontSize: 50,
//         fontWeight: "bold",
//         color: "#2e3f37",
//     },
//     nameText: {
//         fontSize: 50,
//         color: "black"
//     },
//     infoText: {
//         fontSize: 15
//     },
//     button: {
//         backgroundColor: "rgb(128, 176, 224)",
//         paddingVertical: 10,
//         borderRadius: 10
//     },
//     buttonText: {
//         fontSize: 20,
//         color: "black"
//     },
//     card: {
//         backgroundColor: "#f2f4f6",
//         width: 300,
//         paddingVertical: 20
//     }
// })

// // HAFTANIN ÖDEVİ TO DO LIST UYGULAMASI

// ÇÖZÜMLÜ ÖRNEK YENİDEN ÇÖZÜM DERS KARTLARI UYGULAMASI

// import {Pressable, View, Text, StyleSheet} from "react-native";
// import {useState} from "react";

// interface Course {
//     id: number;
//     name: string;
//     instructor: string;
//     credit: number;
// }

// interface CourseCardProps {
//     name: string;
//     instructor: string;
//     credit: number;
// }

// const courses: Course[] = [
//     {
//         id: 1,
//         name: "Veri Organizasyonu",
//         instructor: "Ahmet Arif Aydın",
//         credit: 6
//     },
//     {
//         id: 2,
//         name: "Otomata",
//         instructor: "Abdullah Ateş",
//         credit: 7
//     },
//     {
//         id: 3,
//         name: "Görüntü İşleme",
//         instructor: "Muhammed Fatih Talu",
//         credit: 19
//     }
// ]

// function CourseCard ({name, instructor, credit} : CourseCardProps){
//     const [favorite, setFavorite] = useState(false);

//     return(
//         <View style = {styles.courseCard}>
//             <Text style = {styles.nameText}>{name}</Text>
//             <Text style = {styles.infoText}>{instructor}</Text>
//             <Text style = {styles.infoText}>{credit}</Text>

//             <Pressable style = {styles.button}
//                 onPress = {() => setFavorite(!favorite)}
//             >
//                 <Text> {favorite ? "Favorilerden çıkar." : "Favorilere ekle."} </Text>
//             </Pressable>
//         </View>) 
// }

// export default function App(){
//     return (
//         <View style = {styles.container}>
//             {courses.map(course =>
//                 (<CourseCard
//                     key = {course.id}
//                     name = {course.name}
//                     instructor = {course.instructor}
//                     credit = {course.credit}
//                 />
//             ))}
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     courseCard: {
//         backgroundColor: "grey",
//         width: 200,
//         height: 200
//     },
//     nameText: {
//         fontSize: 25,
//         fontWeight: "bold",
//         color: "black"
//     },
//     infoText: {
//         fontSize: 15,
//         color: "black"
//     },
//     button: {
//         backgroundColor: "#4d6364",
//         width: 100,
//         height: 100
//     }
// });
