// // Çalıştırmak için cd IlkMobilUygulamam ve ardından npx expo start

// import { TextInput } from "react-native/types_generated/index";

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

// import {useState} from "react";
// import { Pressable, StyleSheet, Text, View } from "react-native";

// export default function App(){
//   const [count, setCount] = useState(0);

//   return (
//     <View style = {styles.container}>
//       <Text style = {styles.label}>Sayaç</Text>
//       <Text style = {styles.count}>{count}</Text>

//       <View style = {styles.row}>
//         <Pressable
//           style = {styles.button}
//           onPress = {() => setCount(count - 1)}
//         >
//           <Text style = {styles.buttonText}>-</Text>
//         </Pressable>

//         <Pressable
//           style = {styles.button}
//           onPress = {() => setCount(0)}
//         >
//           <Text style = {styles.buttonText}>Sıfırla</Text>
//         </Pressable>

//         <Pressable
//           style = {styles.button}
//           onPress = {() => setCount(count + 1)}
//         >
//           <Text style = {styles.buttonText}>+</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F3F4F6",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   label: {
//     fontSize: 16,
//     color: "#4B5563"
//   },
//   count: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#7B1E3A",
//     marginVertical: 12
//   },
//   row: {
//     flexDirection: "row",
//     marginTop: 8
//   },
//   button: {
//     backgroundColor: "#7B1E3A",
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     marginHorizontal: 6
//   },
//   buttonText: {
//     color: "#FFFFF",
//     fontSize: 16,
//     fontWeight: "bold"
//   }
// });
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

// Padding kutunun içine, margin kutunun dışına boşluk koyar.
// Bir karta margin verirsek kart aynı kalır ama komşusuyla arasındaki mesafe büyür.

// justifyContent her zaman ana eksende ve alignItems her zaman çapraz eksende çalışır.
// Ancak flexDirection'ı değiştirdiğimizde bu iki property'nin hangi yönde iş yaptığı da değişir.

// Responsive tasarım: Arayüzün, çalştığı cihazın ekran boyutuna göre kendini bozulmadan düzenleyebilmesidir.

// Safe area: Adından da anlaşılacağı üzere ekranın sistem ögeleriyle çakışmayan ve içeriğin güvenle gösterilebileceği bölgedir.

// Yerel görsel.
// Projenin içerisinde bulunan bir dosya require() ile yüklenir.

{/* <Image
  style = {styles.logo}
  source = {require("./assets/icon.png")}
/> */}

// Uzak görsel.
// İnternetten gelen bir görselde source bir object'dir ve "uri" property'si taşır.

// <Image
//   style = {styles.logo}
//   source = {{uri: "https.//reactnative.dev/img/tiny_logo.png"}}
// />

// require() ile gelen görsellerde width ve height değerleri opsiyoneldir.
// Ancak internetten uri ile gelen görsellerde bu zorunludur. Boyutları belirtilmezse
// görsel hiç görünmez ve herhangi bir hata alınmaz.

// Kare bir görseli daireye çevirmenin yolu, borderRadius değerini genişliğin yarısına eşitlemektir.

// cover: Görsel kutuyu tamamen doldurur. Taşan kısım kırpılır. Varsayılan değerdir.
// contain: Görselin tamaı kutuya sığdırılır. Kırpma olmaz ama kutuda boşluk kalabilir.


// Kaydırılabilir bir ekrana sahip olmak için ScrollView kullanılır.
// import {ScrollView, StyleSheet, Text} from "react-native";

// function AboutScreen(){
//   return (
//     <ScrollView contentContainerStyle = {styles.content}>
//       <Text style = {styles.title}>Hakkımda</Text>
//       {/* ekrandan uzun içerik */}
//     </ScrollView>
//   );
// }

// ScrollView'da style kaydırma penceresine, contentContainerStyle ise içeriğe uygulanır.
// İç boşluk(padding) ve içeriğin hizalanması contentContainerStyle içine yazılır.

// AYRICA ScrollView'ın flex: 1 yazılmaz. Bu içeriği ekran boyutuna sıkıştırır ve kaydırılması planlanan ekranın
// tek bir ekran olması anlamına gelir. Her şey sıkıştığı için çok küçük görünür.

// ScrollView çok fazla çocuğunun olacağı durumlarda kullanılmaz. Çünkü ScrollView her şeyi aynı anda oluşturur.
// Bu da çok çok aşağıda kalan şeylerin bile ilk andan yüklemesi ve uygulamanın yavaşlaması anlamına gelir.
// Bu sebeple böyle durumlarda FlatList kullanılır. İlerliyen haftalarda göreceğiz.

// Aynı yapı çok kez tekrar ediyorsa o yapı component haline getirilmelidir. İş yükünü azaltır.

// Yüksekliğin yarısına eşit bir borderRadius'un kareyi 

// Bir butonun duruma göre iki farklı görünümü varsa bu boolean bir değer ile belirlenir.

// Bir component'in props sayısı altıyı geçiyorsa, muhtelemen onu ikiye bölmenin zamanı gelmiştir.

// Genel kabul fontSize'lar.

// Başlık 24-28.
// Alt başlık 18-20.
// Normal metin 14-16.
// Yardımcı metin 12-14.

// Font boyutlar ve renk paletleri her ekran için 3-4 olduğu durumda normal kabul edilir.

// // ÖRNEK 3.1 ÖĞRENCİ PROFİL EKRANI
// import {Image, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
// import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

// interface StatCardProps {
//   value: string;
//   label: string;
// }

// function StatCard({value, label}: StatCardProps) {
//   return(
//     <View style = {styles.statCard}>
//       <Text style = {styles.statValue}>{value}</Text>
//       <Text style = {styles.statLabel}>{label}</Text>
//     </View>
//   );
// }

// interface BadgeProps{
//   label: string;
// }
// function Badge({label}: BadgeProps){
//   return(
//     <View style = {styles.badge}>
//       <Text style = {styles.badgeText}>{label}</Text>
//     </View>
//   );
// }

// interface AppButtonProps{
//   title: string;
//   onPress: () => void;
// }

// function AppButton({title, onPress}: AppButtonProps){
//   return(
//     <Pressable style = {styles.button} onPress = {onPress}>
//       <Text style = {styles.buttonText}>{title}</Text>
//     </Pressable>
//   );
// }

// const interests: string[] = [
//   "Artifical Intelligence",
//   "Game Developing",
//   "UI Design"
// ];

// function ProfileScreen(){
//   return(
//     <SafeAreaView style = {styles.safe} edges = {["top", "bottom"]}>
//       <ScrollView contentContainerStyle = {styles.content}>

//         <View style = {styles.header}>
//           <Image
//             style = {styles.avatar}
//             source = {require("./assets/myAssets/Benn.png")}
//           />
//             <Text style = {styles.name}>İbrahim Halil Yıldırım</Text>
//             <Text style = {styles.department}>Computer Engineering</Text>
//         </View>

//         <View style = {styles.stats}>
//           <StatCard value = "3" label = "Class"/>
//           <StatCard value = "12" label = "Project"/>
//           <StatCard value = "8" label = "Course"/>
//         </View>

//           <Text style = {styles.sectionTitle}>About me.</Text>
//           <Text style = {styles.paragraph}>
//           I'm working about mobil application and game design. I'm learning to design UI with React Native.
//           </Text>

//           <Text style = {styles.sectionTitle}>Interests</Text>
//         <View style = {styles.badges}>
//           {interests.map((item) => (
//             <Badge key = {item} label = {item} />
//           ))}
//         </View>

//         <AppButton
//           title = "Edit Profile"
//           onPress = {() => console.log("Editing Profile...")}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// export default function App(){
//   return(
//     <SafeAreaProvider>
//       <ProfileScreen />
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   safe: {
//     flex: 1,
//     backgroundColor: "#F5F7FA"
//   },
  
//   content: {
//     padding: 20,
//     paddingBottom: 32
//   },
//   header: {
//     alignItems: "center",
//     marginBottom: 20
//   },

//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 12,
//     backgroundColor: "#E37ED"
//   },

//   name: {
//     fontSize: 24,
//     fontWeight: "700",
//     color: "#202124"
//   },

//   department: {
//     fontSize: 14,
//     color: "#666665",
//     marginTop: 2
//   },

//   stats: {
//     flexDirection: "row",
//     marginBottom: 20
//   },

//   statCard: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//     borderRadius: 16,
//     paddingVertical: 16,
//     alignItems: "center",
//     marginHorizontal: 4
//   },

//   statValue: {
//     fontSize: 20,
//     fontWeight: "700",
//     color: "#7B1E3A"
//   },

//   statLabel: {
//     fontSize: 12,
//     color: "#666665",
//     marginTop: 2
//   },

//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: "#202124",
//     marginBottom: 8
//   },

//   paragraph: {
//     fontSize: 14,
//     lineHeight: 20,
//     color: "#444444",
//     marginBottom: 20
//   },

//   badges: {
//     flexDirection: "row",
//     flexWrap: "wrap", // wrap sayesinde etiketler satıra sığmadığında alt satıra geçmelerini sağlarız.
//     marginBottom: 24
//   },

//   badge: {
//     backgroundColor: "#E8EDF5",
//     borderRadius: 999,
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     marginRight: 8,
//     marginBottom: 8
//   },

//   badgeText: {
//     fontSize: 13,
//     color: "#31507A"
//   },

//   button: {
//     backgroundColor: "#7B1E3A",
//     borderRadius: 12,
//     paddingVertical: 14,
//     alignItems: "center"
//   },

//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     fontWeight: "600"
//   }
// });

// İKİNCİ UYGULAMA DASHBOARD

// const stats = [
//   {id: 1, value: "12", label: "Projeler"},
//   {id: 2, value: "8", label: "Dersler"},
//   {id: 3, value: "5", label: "Görevler"}
// ];

// function Dashboard() {
//   return(
//     <View style = {styles.row}>
//       {stats.map((item) =>(
//         <Statcard
//           key = {item.id}
//           value = {item.value}
//           label = {item.label
//         />
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   dashboard: {
//     padding: 20,
//   },

//   title: {
//     fontSize: 24,
//     fontWeight: "700",
//     color: "#202124",
//     marginBottom: 12
//   },
//   row: {
//     flexDirection: "row"
//   }
// });


// HENÜZ BİTMEDİ. ARA VERİLDİ.
// import {Image, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";

// interface TechnologyCardProps {
//   title: string;
//   description: string;
//   badge: string:
// }

// function TechnologyCard({title, description, badge}: TechnologyCardProps){
//   return(
//       <View style = {styles.technologyCard}>
//     <Text style = {styles.technologyTitle}>{title}</Text>
//     <Text style = {styles.technologyDescription}>{description}</Text>
//     <Text style = {styles.technologyBadge}>{badge}</Text>
//   </View>
//   );
// }

// const styles = StyleSheet.create({

// });

// ŞİMDİLİK ERTELENİYOR // ÖRNEK 3.2 TEKRAR KULLANILABİLİR ÜRÜN KARTLARI

// Alıştırma 3.1 ORTA

// import {StyleSheet, Text, View} from "react-native";
// import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
// interface ProfileCardProps{
//   name: string;
//   department: string;
// }

// function ProfileCard({name, department}: ProfileCardProps){
//   return (
//     <View style = {styles.profileCard}>
//       <Text style = {styles.profileName}>{name}</Text>
//       <Text style = {styles.profileDepartment}>{department}</Text>
//     </View>
//   );
// }

// export default function App(){
//   return(
//     <SafeAreaProvider>
//       <SafeAreaView style = {styles.container}>
//         <ProfileCard name = "İbrahim Halil Yıldırım" department = "Computer Engineering" />
//         <ProfileCard name = "Ayşe Demir" department = "Software Engineering" />
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   profileCard: {
//     backgroundColor: "#eccc6e",
//     paddingBottom: 40,
//     paddingHorizontal: 20,
//     borderRadius: 15,
//     marginBottom: 10,
//     alignItems: "center",
//     justifyContent: "center"
//   },
  
//   profileName: {
//     fontSize: 30,
//     fontWeight: "bold",
//     color: "black",
//     marginBottom: 5,
//     paddingTop: 20,
//   },

//   profileDepartment: {
//     fontSize: 18,
//     color: "rgba(48, 48, 48, 0.47)",
//   }
// });


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// HAFTA 2 - 3 Alıştırmalar

// Verileri bileşenler arasında taşımak için props kullanılır.
// Parent component, child component'e veri gönderir.
// Gönderilen verinin türünü güvenceye almak için ise interface kullanılır.
// Component içinde destructuring yöntemiyle props'lar yakalanır.

// Örnek

// import {StyleSheet, Text, View} from "react-native";

// // Child component'in alacağı verilerin tipini belirliyoruz.

// interface StudentCardProps{
//   name: string;
//   department: string;
//   grade: number;
// }

// // Reusable component'imizi yazıyoruz ve destructuring yapıyoruz.

// function StudentCard({name, department, grade}: StudentCardProps){
//   return(
//     <View style = {styles.card}>
//       <Text style = {styles.nameText}>{name}</Text>
//       <Text style = {styles.infoText}>{department}</Text>
//       <Text style = {styles.infoText}>{grade}</Text>
//     </View>
//   );
// }

// export default function App(){
//   return(
//     <View style = {styles.container}>
//       <Text style = {styles.title}>Öğrenci Profilleri</Text>
//       <StudentCard name = "İbrahim Halil Yıldırım" department = "Bilgisayar Mühendisliği" grade = {3} />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F3F4F6', paddingTop: 60, alignItems: 'center' },
//   title: { fontSize: 20, fontWeight: '700', marginBottom: 16, color: '#1F2937' },
//   card: { backgroundColor: '#FFFFFF', width: 300, padding: 14, borderRadius: 10, marginBottom: 10 },
//   nameText: { fontSize: 16, fontWeight: '700', color: '#7B1E3A' },
//   infoText: { fontSize: 12, color: '#4B5563', marginTop: 2 }
// });


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// Aynı bileşen yapısı props sayesinde farklı verilerle tekrar kullanılabilir.
 

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function BoxModelExample() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.box}>
//         <Text style={styles.text}>Box Model Örneği</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E5E7EB' },
//   box: {
//     backgroundColor: '#FFFFFF',      // Kutunun arka plan rengi
//     borderWidth: 2,                  // Çerçeve kalınlığı (Border)
//     borderColor: '#7B1E3A',          // Çerçeve rengi
//     borderRadius: 12,                // Köşe yuvarlama
//     paddingHorizontal: 20,           // Sağdan/soldan iç boşluk (Padding)
//     paddingVertical: 16,             // Üstten/alttan iç boşluk (Padding)
//     margin: 10,                      // Dış boşluk (Margin)
//   },
//   text: { fontSize: 14, fontWeight: '600', color: '#1F2937' }
// });

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function FlexboxAxesExample() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.rowContainer}>
//         <View style={styles.box}><Text style={styles.boxText}>A</Text></View>
//         <View style={styles.box}><Text style={styles.boxText}>B</Text></View>
//         <View style={styles.box}><Text style={styles.boxText}>C</Text></View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F9FAFB', justifyContent: 'center', alignItems: 'center' },
//   rowContainer: {
//     width: '90%', height: 100, backgroundColor: '#E5E7EB', borderRadius: 10,
//     flexDirection: 'row',          // Ana ekseni YATAY yapar!
//     justifyContent: 'space-around',// Yatayda eşit dağıtır
//     alignItems: 'center',          // Dikeyde ortalar
//   },
//   box: { width: 50, height: 50, backgroundColor: '#7B1E3A', borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
//   boxText: { color: '#FFFFFF', fontWeight: 'bold' }
// // });
// import { StyleSheet, Text, View } from 'react-native';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// export default function SafeAreaExample() {
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
//         <View style={styles.content}>
//           <Text style={styles.title}>Güvenli Alan İçeriği</Text>
//           <Text style={styles.description}>Bu yazı çentiğin altında kalmaz.</Text>
//         </View>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: '#F5F7FA' },
//   content: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' },
//   title: { fontSize: 18, fontWeight: '700', color: '#202124' },
//   description: { fontSize: 12, color: '#666666', marginTop: 4 }
// });


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Cihaz çentikleri ve sistem çubuklarıyla içeriğin çakışmaması için SafeAreaProvider en dışa, 
// SafeAreaView ise ekran içeriklerine uygulanır.

// import {StyleSheet, Text, View} from "react-native";
// import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

// export default function SafeAreaExample() {
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style = {styles.safeArea} edges = {["top", "bottom"]}>
//         <View style = {styles.content}>
//           <Text style = {styles.title}>Güvenli alan içeriği</Text>
//           <Text style = {styles.description}>Bu yazı çentiğin altında kalmaz.</Text>
//         </View>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {flex: 1, backgroundColor: "#F5F7FA"},
//   content: {flex: 1, padding: 16, justifyContent: "center", alignItems: "center"},
//   title: {fontSize: 18, fontWeight: "700", color: "#202124"},
//   description: {fontSize: 12, color: "#666665", marginTop: 4}
// });

// Yerel resimler require() ile, internet resimleri {uri: "....."} ile yüklenir.
// Uzak resimlere width ve height vermek zorunludur. borderRadius'u genişliğin yarısına eşitlersek tam dairesel görünüm elde ederiz.

// import {Image, StyleSheet, Text, View} from "react-native";

// export default function ImageExample(){
//   return(
//     <View style = {styles.container}>
//       <Image
//         source = {{uri: "https://reactnative.dev/img/tiny_logo.png"}}
//         style = {styles.avatar}
//         resizeMode = "cover" // Görselin sığdırılma modu.
//       />
//       <Text style = {styles.name}>İbrahim Halil Yıldırım</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white"
//   },

//   avatar: {
//     width: 90,
//     height: 90,
//     borderRadius: 45,
//     backgroundColor: "#E3E7ED",
//     marginBottom: 10
//   },

//   name: {
//     fontSize: 18,
//     fontWeight: "700", // 100-900 arası. 700 tam bold'a karşılık gelir.
//     color: "#202124"
//   }
// });

// Ekrana sığmayan uzun içerikler için ScrollView kullanılır.
// İç boşluklar style yerine contentContainerStyle  içine verilmelidir.
// ScrollView içerisine flex: 1 verilmemelidir. 
// Çok daha performans gereken durumlarda ScrollView yerine FlatList (Ekranda görünmeyen ögeleri bellekte tutmaz.) kullanılır.

// import {ScrollView, StyleSheet, Text, View} from "react-native";

// export default function ScrollViewExample() {
//   return(
//     <ScrollView contentContainerStyle = {styles.scrollContent}>
//       <Text style = {styles.title}>Uzun Sayfa Başlığı</Text>

//       <View style = {styles.card}><Text>Kart 1</Text></View>
//       <View style = {styles.card}><Text>Kart 2</Text></View>
//       <View style = {styles.card}><Text>Kart 3</Text></View>
//       <View style = {styles.card}><Text>Kart 4</Text></View>
//       <View style = {styles.card}><Text>Kart 5</Text></View>
//       <View style = {styles.card}><Text>Kart 5435</Text></View>
//       <View style = {styles.card}><Text>Kart 54</Text></View>
//       <View style = {styles.card}><Text>Kart 57</Text></View>
//       <View style = {styles.card}><Text>Kart 59</Text></View>
//       <View style = {styles.card}><Text>Kart 50</Text></View>
//       <View style = {styles.card}><Text>Kart 52</Text></View>
//       <View style = {styles.card}><Text>Kart 25</Text></View>
//       <View style = {styles.card}><Text>Kart 25</Text></View>
//       <View style = {styles.card}><Text>Kart 115</Text></View>
//       <View style = {styles.card}><Text>Kart 1355</Text></View>
//   </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   scrollContent: {
//     padding: 16,
//     paddingBottom: 30, // Listenin sonunda ekstra boşluk bırakıyoruz.
//     backgroundColor: "#F5F7FA"
//   },

//   title: {
//     fontSize: 20,
//     fontWeight: "700",
//     marginBottom: 12,
//     color: "#202124"
//   },

//   card: {
//     backgroundColor: "white",
//     height: 70,
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 10
//   }
// });


// REUSABLE UI COMPONENTS
// Kod tekrarını engellemek için modüler parçalar (StatCard, AppButton) oluşturulur.
// Tıklama olayları için Pressable kullanılır ve onPress fonksiyonu prop olarak aktarılır.

// import {Pressable, StyleSheet, Text, View} from "react-native";

// interface StatCardProps{
//   value: string;
//   label: string;
// }

// function StatCard({value, label}: StatCardProps){
//   return(
//     <View style = {styles.statCard}>
//       <Text style = {styles.statValue}>{value}</Text>
//       <Text style = {styles.statLabel}>{label}</Text>
//     </View>
//   );
// }

// interface AppButtonProps {
//   title: string;
//   onPress: () => void;
// }

// function AppButton({title, onPress}: AppButtonProps){
//   return(
//     <Pressable style = {styles.button} onPress = {onPress}>
//       <Text style = {styles.buttonText}>{title}</Text>
//     </Pressable>
//   );
// }

// export default function App() {
//   return (
//     <View style = {styles.container}>
//       <View style = {styles.row}>
//         <StatCard value = "12" label = "Project" />
//         <StatCard value = "8" label = "Course" />
//       </View>
//       <AppButton title = "Save" onPress = {() => console.log("Pressed!")} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     justifyContent: "center",
//     backgroundColor: "#F5F7FA" 
//   },

//   row: {
//     flexDirection: "row",
//     marginBottom: 16
//   },

//   statCard: {
//     flex: 1,
//     backgroundColor: "#FFF",
//     borderRadius: 10,
//     padding: 12,
//     alignItems: "center",
//     marginHorizontal: 4
//   },

//   statValue: {
//     fontSize: 18,
//     fontWeight: "700",
//     color: "#7B1E3A",
//   },

//   statLabel: {
//     fontSize: 11,
//     color: "#665"
//   },

//   button: {
//     backgroundColor: "#7B1E3A",
//     borderRadius: 10,
//     paddingVertical: 12,
//     alignItems: "center"
//   },

//   buttonText: {
//     color: "#FFF",
//     fontSize: 14,
//     fontWeight: "600"
//   }
// });

// ALIŞTIRMA ORTA
// Ekrandan daha uzun bir içeriği ScrollView içinde gösteriniz. 
// En az sekiz adet kart veya paragraf koyunuz.
// İçeriğin alt kenarında boşluk kalması için contentContainerStyle 
// içine paddingBottom ekleyiniz.

// import {ScrollView, StyleSheet, Text, View} from "react-native";


// export default function App(){
//   return(
//     <View style = {styles.container}>
//       <ScrollView contentContainerStyle = {styles.scrollContent}>
//       <View style = {styles.card}><Text>Kart 1</Text></View>
//       <View style = {styles.card}><Text>Kart 2</Text></View>
//       <View style = {styles.card}><Text>Kart 3</Text></View>
//       <View style = {styles.card}><Text>Kart 4</Text></View>
//       <View style = {styles.card}><Text>Kart 5</Text></View>
//       <View style = {styles.card}><Text>Kart 6</Text></View>
//       <View style = {styles.card}><Text>Kart 7</Text></View>
//       <View style = {styles.card}><Text>Kart 8</Text></View>
//       <View style = {styles.card}><Text>Kart 8</Text></View>
//       <View style = {styles.card}><Text>Kart 8</Text></View>
//       <View style = {styles.card}><Text>Kart 8</Text></View>
//       <View style = {styles.card}><Text>Kart 8</Text></View>
//       <View style = {styles.card}><Text>Kart 8</Text></View>
//       <View style = {styles.card}><Text>Kart 8</Text></View>
//       <View style = {styles.card}><Text>Kart 8</Text></View>
//       <View style = {styles.card}><Text>Kart 8</Text></View>
//       <View style = {styles.card}><Text>Kart 8</Text></View>
//       <View style = {styles.card}><Text>Kart 8</Text></View>
//     </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 40
//   },
//   scrollContent: {
//     padding: 16,
//     paddingBottom: 50,
//     backgroundColor: "#234234"
//   },

//   card: {
//     backgroundColor: "#D49922",
//     borderColor: "rgba(0, 128, 255, 0.84)",
//     borderWidth: 3,
//     borderRadius: 10,
//     height: 70,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 10
//   }
// });

// Alıştırma 3.7'de kaldın. Zor olan.

// import {TextInput} from "react-native";

// <TextInput
//   placeholder = "Adınızı giriniz."
// />

// input: {
//   borderWith: 1,
//   borderColor: "#CCCCCC",
//   borderRadius: 10,
//   padding: 12,
//   fontSize: 16
// }

// TextInput'a stil vermek önemlidir.

// placeholder, alan boşken gösterilen soluk açıklama yazısıdır.
{/* <TextInput
  placeholder = "Entry your name."
/> */}

// value, input'un ekranda göstereceği değerdir. Bu değer koddan verilir.

{/* <TextInput
  value = {name}
/> */}

/// onChangeText, kullanıcı metni her değiştirdiğinde çağrılan function'dır ve yeni metni argüman olarak verir.
// const [name, setName] = useState("");

// <TextInput
//   style = {styles.input}
//   placeholder = "Adınızı giriniz."
//   value = {name}
//   onChangeText = {setName}
// />

// Ekranda görünen metin klavyeden gelmez. state'ten okunduğu için görünür.

// Controlled input, ekranda gösterdiği değer React state tarafından
// kontrol edilen giriş alanıdır.
// Input'un kendine ait bir "hafızası" yoktur; ne göstereceğini her zaman state'ten okur.

// const [name, setName] = useState("");

// <TextInput
//   value = {name}
//   onChangeText = {setName}
// />

// interface Task{
//   id: number;
//   title: string;
// }

// const [tasks, setTasks] = useState<Task[]>([]);

// const newTask: Task = {
//   id: Date.now(),
//   title: taskText.trim()
// };

// setTask([
//   ...tasks,
//   newTask
// ]);

// setTaskText("");

// Silme işlemi filter() ile yapılır:
// Olan şey id'si belirlenen task hariç diğer tüm kayıtlı task'lerin yeni bir array'e eklenmesidir.
// const deleteTask = (id: number) => {
//   setTask(
//     tasks.filter(task => task.id !== id)
//   );
// };

// Kısaca silmek, kalanları seçmektir.

// interface Task {
//   id: number;
//   title: string;
//   completed: boolean;
// }

// const toggleTask = (id: number) => {
//   setTask(
//     tasks.map(task =>
//       task.id === id
//         ? {
//           ...task, // Bu satırı yazmak çok kritik.
//           completed: !task.completed
//         }

//         : task
//     )
//   );
// };

// // CRUD : Create, Read, Update, Delete


// // Kullanıcının yaptığı işlemi görebilmesi için en kısa yol Alert kullanmaktır.
// // import {Alert} form "react-native";

// // Alert.alert(
// //   "Başarılı",
// //   "Kayıt Eklendi."
// // );

// // Silinen veri geri gelmez. Bu sebeple emin olmak adına uygulamanın teyit etmesi tavsiye edilir.

// import {Alert} from "react-native";
// const confirmDelete = (id: number) => {
//   Alert.alert(
//     "Görevi sil",
//     "Bu görevi silmek istediğinizden emin misiniz?",
//     [
//       {
//         text: "İptal",
//         style: "cancel"
//       },
//       {
//         text: "Sil",
//         onPress: () => deleteTask(id)
//       }
//     ]
//   );
// };

// <AppButton
//   title = "Kaydet"
//   onPress = {saveData}
// />

// interface TaskItemProps {
//   task: Task,
//   onToggle: (id: number) => void;
//   onDelete: (id: number) => void;
// }



///////////////////////////////////////////////7
///////////////////////////////////////////////7
///////////////////////////////////////////////7
///////////////////////////////////////////////7
///////////////////////////////////////////////7
// // Kullanıcı Kayıt Formu
// import {useState} from "react";
// import {Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
// import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

// interface AppButtonProps {
//   title: string;
//   onPress: () => void;
// }

// function AppButton({title, onPress}: AppButtonProps) {
//   return(
//     <Pressable style = {styles.button} onPress = {onPress}>
//       <Text style = {styles.buttonText}>{title}</Text>
//     </Pressable>
//   );
// }

// function RegisterForm() {
//   const [name, setName] = useState(" ");
//   const [email, setEmail] = useState(" ");
//   const [city, setCity] = useState(" ");
//   const [error, setError] = useState(" ");

//   const saveUser = () => {
//     if(name.trim() === ""){
//       setError("Ad soyad alanı boş bırakılamaz.");
//       return;
//     }
//     if(email.trim() === ""){
//       setError("E-posta alanı boş bırakılamaz.");
//       return;
//     }
//     if(city.trim() === ""){
//       setError("Şehir alanı boş bırakılamaz");
//       return;
//     }
//     setError("");

//     Alert.alert(
//       "Başarılı",
//       name.trim() + " kaydedildi."
//     );

//     setName("");
//     setEmail("");
//     setCity("");
//   };

//   return(
//     <SafeAreaView
//       style = {styles.safe}
//       edges = {["top", "bottom"]}
//     >
//       <ScrollView contentContainerStyle = {styles.content}>
//         <Text style = {styles.title}>
//           Kullanıcı Kayıt Formu
//         </Text>
        
//         <Text style = {styles.label}>Ad soyad</Text>
//         <TextInput
//           style = {styles.input}
//           placeholder = "Ad soyad"
//           value = {name}
//           onChangeText = {setName}
//         />

//         <Text style = {styles.label}>E-posta</Text>
//         <TextInput
//           style = {styles.input}
//           placeholder = "örnek@gmail.com"
//           keyboardType = "default"
//           autoCapitalize = "none"
//           value = {email}
//           onChangeText = {setEmail}
//         />

//         <Text style = {styles.label}>Şehir</Text>
//         <TextInput
//           style = {styles.input}
//           placeholder = "Örn. Şanlıurfa"
//           value = {city}
//           onChangeText = {setCity}
//         />

//         {error !== "" && (
//           <Text style = {styles.error}>{error}</Text>
//         )}

//         <AppButton
//           title = "Kaydet"
//           onPress = {saveUser}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// export default function App(){
//   return(
//     <SafeAreaProvider>
//       <RegisterForm />
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   safe: {
//     flex: 1,
//     backgroundColor: "#F5F7FA"
//   },

//   content: {
//     padding: 20
//   },

//   title: {
//     fontSize: 22,
//     fontWeight: "700",
//     color: "#202124",
//     marginBottom: 20
//   },

//   label: {
//     fontSize: 14,
//     fontWeight: "600",
//     color: "#444444",
//     marginBottom: 6
//   },

//   input: {
//     borderWidth: 1,
//     borderColor: "#CCCCCC",
//     borderRadius: 10,
//     backgroundColor: "#FFFFFF",
//     padding: 12,
//     fontSize: 16,
//     marginBottom: 14
//   },

//   error: {
//     color: "#C62828",
//     fontSize: 13,
//     marginBottom: 10
//   },

//   button: {
//     backgroundColor: "#7B1E3A",
//     borderRadius: 12,
//     paddingVertical: 14,
//     alignItems: "center",
//     marginTop: 6
//   },

//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     fontWeight: "600"
//   }
// });

// Örnek 4.2 Mini Görev Yöneticisi

import {useState} from "react";
import {Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TaskItem({task, onToggle, onDelete}: TaskItemProps){
  return(
    <View style = {styles.taskRow}>
      <Pressable
        style = {styles.taskMain}
        onPress = {() => onToggle(task.id)}
      >
        <Text style = {styles.mark}>
          {task.completed ? "[x]" : "[ ]"}
        </Text>

        <Text
          style = {[
            styles.taskText,
            task.completed && styles.completedText
          ]}
        >
          {task.title}
        </Text>
      </Pressable>

      <Pressable
        style = {styles.deleteButton}
        onPress = {() => onDelete(task.id)}
      >
        <Text style = {styles.deleteText}>Sil</Text>
      </Pressable>
    </View> 
  );
}

function TaskScreen() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState("");

  const addTask = () => {
    if(taskText.trim() === ""){
      setError("Görev adı boş bırakılamaz.");
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: taskText.trim(),
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
    setError("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
            ...task,
            completed: !task.completed
          }
          : task
    )
  );
};

const deleteTask = (id: number) => {
  setTasks(
    tasks.filter((task) => task.id !== id)
  );
};

const confirmDelete = (id: number) => {
  Alert.alert(
    "Görevi sil",
    "Bu görevi silmek istediğinize emin misin?",
    [
      {
        text: "iptal",
        style: "cancel"
      },
      {
        text: "sil",
        onPress: () => deleteTask(id)
      }
    ]
  );
};

const doneCount = tasks.filter(
  (task) => task.completed
).length;

return (
  <SafeAreaView
    style = {styles.safe}
    edges = {["top", "bottom"]}
  >
    <ScrollView contentContainerStyle = {styles.content}>
      <Text style = {styles.title}>Görevlerim</Text>

      <View style = {styles.inputRow}>
        <TextInput
          placeholder = "Yeni görev..."
          value = {taskText}
          onChangeText = {setTaskText}
        />

        <Pressable
          style = {styles.addButton}
          onPress = {addTask}
        >
          <Text style = {styles.addButtonText}>
            Ekle
          </Text>
        </Pressable>
        </View>

        {error !== "" && (
          <Text style = {styles.error}>{error}</Text>
        )}

        {tasks.length === 0 ? (
          <Text style = {styles.emptyText}>
            Henüz görev eklenmedi.
          </Text>
        ) : (
          <Text style = {styles.counter}>
            {tasks.length} görev, {doneCount} tamamlandı.
          </Text>
        )}

        {tasks.map((task) => (
          <TaskItem
            key = {task.id}
            task = {task}
            onToggle = {toggleTask}
            onDelete = {confirmDelete}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App(){
  return(
    <SafeAreaProvider>
      <TaskScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  content: {
    padding: 20,
    paddingBottom: 40
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#202124",
    marginBottom: 16
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center"
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    padding: 12,
    fontSize: 16
  },

  addButton: {
    backgroundColor: "#7B1E3A",
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 18,
    marginLeft: 8
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600"
  },

  error: {
    color: "#C62828",
    fontSize: 13,
    marginTop: 8
  },
  
  counter: {
    fontSize: 13,
    color: "#666665",
    marginTop: 14,
    marginBottom: 10
  },

  emptyText: {
    textAlign: "center",
    color: "#999999",
    fontSize: 14,
    marginTop: 24
  },

  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10
  },

  taskMain: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },

  mark: {
    fontSize: 15,
    color: "#7B1E3A",
    marginRight: 10
  },
  
  taskText: {
    flex: 1,
    fontSize: 16,
    color: "#202124",
  },

  completedText: {
    textDecorationLine: "line-through",
    color: "#999999"
  },

  deleteButton: {
    backgroundColor: "#FDECEC",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginLeft: 8
  },

  deleteText: {
    color: "#C62828",
    fontSize: 13,
    fontWeight: "600"
  }
});
