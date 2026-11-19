// // // Çalıştırmak için cd IlkMobilUygulamam ve ardından npx expo start

import { useEffect } from "react";
import { FlatList } from "react-native/types_generated/index";

// // import { TextInput } from "react-native/types_generated/index";

// // / / / //  // / / / / / / / // import { useState } from "react";

// // import { Pressable } from "react-native";

// // import { Pressable } from "react-native";

// // import { Pressable } from "react-native";


// // import { StyleSheet, Text, View} from 'react-native';

// // export default function App(){
// //   return(
// //     <View style = {styles.container}>
// //       <Text> Deneme Yazısı!</Text>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   title: {
// //     fontSize: 25,
// //     color: `#222`,
// //     fontWeight: ``
// //   }
// // });

// // // const değeri değişmeyecek değişkenler için. let ise değeri sonradan değiştirilebilecekler için.

// // const _name = "İbrahim";
// // let _ID = 23

// // console.log(`İsim:${_name} ve ID:${_ID}`);

// // // Array: Birden çok değeri sıralı biçimde tutar.

// // const technologies = ["React Native", "Expo", "TypeScript"];
// // // İlk elemanın indeksi sıfır.

// // console.log(technologies[0]);
// // console.log(technologies.length);


// // // - Object -

// // // Object, birbirleriyle ilişkili bilgileri ad-değer çiftleri hâlinde tutar.
// // // Mobil uygulamalarda kullanıcı, ürün veya mesaj gibi varlıkları temsil etmek için en çok kullanılan yapıdır.

// // const student = {
// //   id: 1,
// //   name: "İbrahim",
// //   department: "Computer Engineering",
// //   grade: 3
// // };

// // console.log(student.id);
// // console.log(student.name);
// // console.log(student.department);
// // console.log(student.grade);

// // // Object Arrayler sık sık karşılaşacağımız bir yapıdır.

// // const students = [ { id: 1, name: "Ali", grade: 1},
// //                    { id: 2, name: "İbrahim", grade: 3},
// //                    { id: 3, name: "Elif", grade: 4} ]

            
// //     // Function
// // function greet(name: string){
// //   return `greet ${name}`;
// // }

// //     // Arrow Function
// // const greet2 = (name: string) => {
// //   return `Merhaba ${name}`;
// // }

// // const greet3 = (name: string) => {return `Merhaba ${name}`;};

// // // Üç fonksiyonda aynı işi yapar. Ama sonuncusu oldukça yaygındır.

// // // map(), bir array'in her elementini dönüştürerek yeni bir array üretir. Özgün array değişmez.

// // const numbers = [1, 2, 3];
// // const doubled = numbers.map(number => number * 2);

// // console.log(doubled);

// // // filer(), bir koşulu sağlayan elemenlerden yeni bir array oluşturur.

// // const numbers2 = [ 1, 2, 3, 4, 5];
// // const result = numbers2.filter(numbers2 => numbers2 > 3);
// // console.log(result);

// // // find(), koşulu sağlayan ilk elemnti döndürür. Sonuç bir array değil, tek bir elementtir.

// // // students dizisindeki elemanları sırayla tarar ve id'si 2 olanı student2 değişkenine atar.
// // const student2 = students.find(item => item.id === 2);
// // // student2'ye atanan objenin name propety'si ekrana yazdırılır.
// // console.log(student.name);

// // // ÖNEMLİ: Karşılaştırmalarda == yerine === kullanınız. === hem değeri hem de
// // // tipi karşılaştırır ve beklenmedik sonuçları önler.

// // // Spread Operator
// // // Üç nokta ... yazımı, var olan bir arrayin elementlerini kendisini değiştirmeden
// // // yeni bir arrayin içine açar.
// // // ÖNEMLİ: Rest Parametresi ile Spread Operatörü kullanıldığı bağlama göre iki farklı isim alır.
// // // Görünüşleri aynı olsa da işlevleri birbirinin tam tersidir.


// // const oldItems = [1, 2, 3];
// // const newItems = [...oldItems, 4];
// // console.log(newItems);

// // // Destructuring
// // // Bir object'in property'leri tek satırda ayrı variable'lara aktarılabilir.

// // const student3 = {
// //   name: "Ali",
// //   age: 21
// // };

// // const {name, age} = student3;
// // console.log(name);

// // // DESTRUCTURING (Yapı Bozma): Bir dizi veya nesneden belirli değerleri kolayca
// // // değişkenlere ayırarak almayı sağlar.

// // // dizi bozarken [], nesne bozarken {}
// // /* */

// // /////////////////////////////////////

// // // View  Container'dır; içine başka component'ler alır ve layout'u taşır.
// // // Text  Metin gösterir. Ekrandaki her metin bir Text içinde olmalıdır.
// // // Pressable  Dokunulabilir alan oluştrur; dokunulduğunda bir gunction çalıştırır.
// // //  Görsel gösterir. Bu hafta detaylı anlatılmayacak.


// // // 5.2 StyleSheet

// // // Stiller StyleSheet.create içinde tanımlanır ve component'e style property'si ile verilir.

// // /////////////////////////////////////////////////////////////////////

// // // React Native'de yazı biçimi camelCase olmalıdır. Ayrıca fontSize: 20px yazımı geçersizdir.
// // // fontSize: 20 doğru olan biçimdir.

// // YATAY KART ÖRNEĞİ //

// // Üç kutuyu yan yana yerleştirelim.

// // import {StyleSheet, Text, View} from 'react-native';

// // const technologies = ['React Native', 'Expo', 'TypeScript'];

// // export default function App(){
// //   return(
// //     <View style={styles.container}>
// //       <View style={styles.row}>
// //         {technologies.map(tech => (
// //           <View key={tech} style={styles.box}>
// //             <Text style={styles.boxText}>{tech}</Text>
// //           </View>
// //         ))}
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center'
// //   },
// //   row: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-around'
// //   },
// //   box: {
// //     backgroundColor: '#E5E7EB',
// //     paddingVertical: 14,
// //     paddingHorizontal: 10,
// //     borderRadius: 8,
// //     width: 100,
// //     alignItems: 'center'
// //   },
// //   boxText: {
// //     fontSize: 13,
// //     color: '#1F2937'
// //   }
// // });
// ///////////////////////////////////////////////

// // Bir profil kartı yapalım.

// // import {Pressable, StyleSheet, Text, View} from 'react-native';

// // const student = {
// //   name: "İbrahim Yıldırım",
// //   department: "Bilgisayar Mühendisliği",
// //   grade: 3
// // };

// // export default function App(){
// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.card}>
// //         <Text style={styles.name}>{student.name}</Text>
// //         <Text style={styles.info}>{student.department}</Text>
// //         <Text style={styles.info}>{student.grade}. Sınıf</Text>
// //         <Pressable
// //           style={styles.button}
// //           onPress={() => console.log("Profil Görüntülendi.")}
// //         >
// //           <Text style={styles.buttonText}>Profili Gör</Text>
// //         </Pressable>
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#F3F9",
// //     justifyContent: "center",
// //     alignItems: "center"
// //   },
// //   card: {
// //     backgroundColor: "#FFFFFF",
// //     width: 280,
// //     padding: 24,
// //     borderRadius: 16,
// //     alignItems: "center"
// //   },
// //   name: {
// //     fontSize: 22,
// //     fontWeight: "bold",
// //     color: "#1F2937"
// //   },
// //   info: {
// //     fontSize: 22,
// //     fontWeight: "bold",
// //     color: "#1F29"
// //   },
// //   button: {
// //     backgroundColor: "#7B1E3A",
// //     paddingVertical: 10,
// //     paddingHorizontal: 20,
// //     borderRadius: 8,
// //     marginTop: 16
// //   },
// //   buttonText: {
// //     color: "#FFFFFF",
// //     fontSize: 15,
// //     fontWeight: "bold"
// //   }
// // });
// // //////////////////////////////////////////////////


// // // Dokuz Çözümlü Örnek
// // import {StyleSheet, Text, View} from "react-native";

// // const technologies = ["React", "Expo", "TypeScript", "JavaScript", "Node"];

// // const lastTechnologies = technologies.filter(technologies => technologies.length > 5);


// // export default function App(){
// //   return (
// //     <View style = {styles.container}>
// //       <View style = {styles.row}>
// //         {lastTechnologies.map(tech => (
// //           <View key = {tech} style = {styles.box}>
// //             <Text style = {styles.boxText}>{tech}</Text>
// //           </View>
// //         ))}
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center"
// //   },
// //   row: {
// //     flexDirection: "row",
// //     justifyContent: "space-around"
// //   },
// //   box: {
// //     backgroundColor: "#E5E7EB",
// //     paddingVertical: 14,
// //     paddingHorizontal: 10,
// //     borderRadius: 8,
// //     width: 100,
// //     alignItems: "center"
// //   },
// //   boxText: {
// //     fontSize: 13,
// //     color: "#1F29"
// //   }
// // });

// // // Filter() : Bir koşulu sağlayan elementlerden yeni bir array oluşturur.
// // // Map() : Bir array'in her elementini dönüştürerek yeni bir array üretir. Özgün array değişmez.


// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // import {Pressable, StyleSheet, Text, View} from "react-native";

// // const student = {
// //   name: "İbrahim Halil Yıldırım",
// //   department: "Computer Engineering",
// //   grade: 3,
// //   interests: ["Photographing,", " Running,", " Reading"]
// // }

// // const interestsFinal = student.interests.map(interests => student.interests);

// // export default function App(){
// //   return(
// //     <View style = {styles.container}>
// //       <View style = {styles.infoCard}>
// //         <Text style = {styles.infoCard}>{student.name}</Text>
// //         <Text style = {styles.infoCard}>{student.department}</Text>
// //         <Text style = {styles.infoCard}>{student.grade}</Text>
// //         <Pressable
// //           style={styles.button}
// //           onPress={() => console.log("Tuşa basıldı.")}
// //         >
// //           <Text style = {styles.button}>Tuş</Text>
// //         </Pressable>
// //       </View>
// //         <Text style = {styles.interestsCard}>{interestsFinal}</Text>
// //     </View>
// //   );
// // }
// // console.log(interestsFinal);
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1, // Ekranın tamamını kaplar.
// //     justifyContent: "center", // Dikeyde merkezler.
// //     alignItems: "center" // Yatayda merkezler.
// //   },
// //   infoCard: {
// //     backgroundColor: "rgb(20, 109, 198)",
// //     width: 280,
// //     padding: 24,
// //     borderRadius: 16,
// //     alignItems: "center"
// //   },
// //   interestsCard: {
// //     backgroundColor: "rgb(229, 157, 40)",
// //     width: 280,
// //     padding: 24,
// //     borderRadius: 16,
// //     alignItems: "center"
// //   },
// //   button: {
// //     backgroundColor: "rgba(129, 216, 148, 0.2)",
// //     paddingVertical: 21,
// //     paddingHorizontal: 10,
// //     borderRadius: 8,
// //     marginTop: 18
// //   }
// // });


// // Ödev Güncel

// // import {Pressable, StyleSheet, Text, View} from "react-native";

// // const student = {
// //   name: "İbrahim Halil Yıldırım",
// //   department: "Computer Engineering",
// //   grade: 3
// // };

// // export default function App(){
// // return(
// //    <View style = {styles.container}>
// //     <View style = {styles.card}>
// //       <Text style = {styles.name}>{student.name}</Text>
// //       <Text style = {styles.info}>{student.department}</Text>
// //       <Text style = {styles.info}>{student.grade}.Sınıf</Text>

// //       <Pressable
// //         style = {styles.button}
// //         onPress = {() => console.log("Profil Görüntülendi.")}
// //       >
// //         <Text style = {styles.buttonText}>Profili Gör</Text>
// //       </Pressable>
// //     </View>
// //    </View>  
// //  );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex:1,
// //     backgroundColor: "#F3F4F6",
// //     justifyContent: "center",
// //     alignItems: "center"
// //   },

// //   card: {
// //     backgroundColor: "#FFFFFF",
// //     width: 280,
// //     padding: 24,
// //     borderRadius: 16,
// //     alignItems: "center"
// //   },
// //   name: {
// //     fontSize: 22,
// //     fontWeight: "bold",
// //     color: "#1F2937"
// //   },

// //   info: {
// //     fontSize: 15,
// //     color: "#4B5563",
// //     marginTop: 4
// //   },

// //   button: {
// //     backgroundColor: "#7B1E3A",
// //     paddingVertical: 10,
// //     paddingHorizontal: 20,
// //     borderRadius: 8,
// //     marginTop: 16
// //   },

// //   buttonText: {
// //     color: "#FFFFFF",
// //     fontSize: 15,
// //     fontWeight: "bold"
// //   }
// // });

// // const oldItems = [1,2,3];
// // const newItems = [...oldItems,4];
// // console.log(newItems);

// // Ödev Güncel Güncel.

// // import {Pressable, StyleSheet, Text, View} from "react-native";

// // const student = {
// //   name: "İbrahim Halil Yıldırım",
// //   department: "Computer Engineering",
// //   grade: 3,
// // };

// // const interests = [
// //   "Photographing",
// //   "Running",
// //   "Developing"
// // ]

// // export default function App(){
// //   return (
// //     <View style = {styles.container}>
// //       <View style = {styles.card}>
// //         <Text style = {styles.name}>{student.name}</Text>
// //         <Text style = {styles.department}>{student.department}</Text>
// //         <Text style = {styles.grade}>{student.grade}</Text>

// //         <Pressable
// //           style = {styles.button}
// //           onPress = {() => console.log("Tuşa basıldı.")}
// //         >
// //           <Text style = {styles.buttonText}>Kontrol Tuşu</Text>
// //         </Pressable>
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex:1,
// //     backgroundColor: "#F3F4F6",
// //     justifyContent: "center",
// //     alignItems: "center"
// //   },

// //   card: {
// //     backgroundColor: "rgba(23, 89, 219, 0.2)",
// //     width: 280,
// //     padding: 24,
// //     borderRadius: 16,
// //     alignItems: "center"
// //   },

// //   name: {
// //     fontSize: 22,
// //     fontWeight: "bold",
// //     color: "rgb(64, 0, 128)"
// //   },

// //   department: {
// //     fontSize: 22,
// //     fontWeight: "bold",
// //     color: "rgb(177, 157, 0)"
// //   },

// //   grade: {
// //     fontSize: 22,
// //     fontWeight: "bold",
// //     color: "rgba(30, 108, 148, 0.85)"
// //   },

// //   button: {
// //     backgroundColor: "#7B1E3A",
// //     paddingVertical: 10,
// //     paddingHorizontal: 20,
// //     borderRadius: 50,
// //     marginTop: 20
// //   },

// //   buttonText: {
// //     color: "rgba(19, 226, 171, 0.61)",
// //     fontSize: 15,
// //     fontWeight: "bold"
// //   }
// // });

// // İlk State Uygulaması

// // import {Pressable, StyleSheet, Text, View} from "react-native";
// // import {useState} from "react";
// // export default function App(){
// //   const [count, setCount] = useState(0);

// //   return (
// //     <View style = {styles.container}>
// //       <Text style = {styles.count}>{count}</Text>
// //     <View style = {{flexDirection: "row"}}>
// //        <Pressable
// //         style = {styles.button}
// //         onPress = {() => setCount(count + 1)}
// //       >
// //         <Text style = {styles.buttonText}>Artır</Text>
// //       </Pressable>

// //       <Pressable
// //         style = {styles.button}
// //         onPress = {() => setCount(count - 1)}
// //       >
// //         <Text style = {styles.buttonText}>Azalt</Text>
// //       </Pressable>
// //     </View>
// //     </View>
// //   )
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center"
// //   },
// //   count: {
// //     fontSize: 40,
// //     marginBottom: 20,
// //   },
// //   button: {
// //     backgroundColor: "yellow",
// //     padding: 15,
// //     borderRadius: 35,
// //   },
// //   buttonText: {
// //     color: "orange",
// //     fontSize: 18
// //   }
// // })

// // UYGULAMA Tekrar Kullanılabilir Öğrenci Kartı

// // import {StyleSheet, Text, View} from "react-native";

// // interface Student {
// //   id: number;
// //   name: string;
// //   department: string;
// //   grade: number
// // }

// // interface StudentCardProps {
// //   name: string;
// //   department: string;
// //   grade: number;
// // }

// // const students: Student[] = [
// //   {
// //     id: 1,
// //     name: "Ali Yıldz",
// //     department: "Bilgisayar Mühendisliği",
// //     grade: 2
// //   },
// //   {
// //     id: 2,
// //     name: "Ayşe Demir",
// //     department: "Bilgisayar Mühendisliği",
// //     grade: 3
// //   },
// //   {
// //     id: 3,
// //     name: "Mehmet Kaya",
// //     department: "Yazılım Mühendisliği",
// //     grade: 1
// //   }
// // ];

// // function StudentCard({name, department, grade} : StudentCardProps) {
// //   return (
// //     <View style = {styles.card}>
// //       <Text style = {styles.name}>{name}</Text>
// //       <Text style = {styles.info}>{department}</Text>
// //       <Text style = {styles.info}>{grade}. Sınıf</Text>
// //     </View>
// //   );
// // }

// // export default function App(){
// //   return (
// //     <View style = {styles.container}>
// //       <Text style = {styles.title}>Öğrenci Listesi</Text>

// //       {students.map(student => (
// //         <StudentCard
// //           key = {student.id}
// //           name = {student.name}
// //           department = {student.department}
// //           grade = {student.grade}
// //         />
// //       ))}
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#F3F4F6",
// //     paddingTop: 60,
// //     alignItems: "center"
// //   },
// //   title: {
// //     fontSize: 20,
// //     fontWeight: "bold",
// //     color: "#1F2937",
// //     marginBottom: 16
// //   },
// //   card: {
// //     backgroundColor: "#FFFFFF",
// //     width: 300,
// //     padding: 16,
// //     borderRadius: 12,
// //     marginBottom: 12
// //   },
// //   name: {
// //     fontSize: 17,
// //     fontWeight: "bold",
// //     color: "#7B1E3A"
// //   },
// //   info: {
// //     fontSize: 14,
// //     color: "#4B5563",
// //     marginTop: 3
// //   }
// // });


// // UYGULAMA Basit Sayaç

// // import {useState} from "react";
// // import { Pressable, StyleSheet, Text, View } from "react-native";

// // export default function App(){
// //   const [count, setCount] = useState(0);

// //   return (
// //     <View style = {styles.container}>
// //       <Text style = {styles.label}>Sayaç</Text>
// //       <Text style = {styles.count}>{count}</Text>

// //       <View style = {styles.row}>
// //         <Pressable
// //           style = {styles.button}
// //           onPress = {() => setCount(count - 1)}
// //         >
// //           <Text style = {styles.buttonText}>-</Text>
// //         </Pressable>

// //         <Pressable
// //           style = {styles.button}
// //           onPress = {() => setCount(0)}
// //         >
// //           <Text style = {styles.buttonText}>Sıfırla</Text>
// //         </Pressable>

// //         <Pressable
// //           style = {styles.button}
// //           onPress = {() => setCount(count + 1)}
// //         >
// //           <Text style = {styles.buttonText}>+</Text>
// //         </Pressable>
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#F3F4F6",
// //     justifyContent: "center",
// //     alignItems: "center"
// //   },
// //   label: {
// //     fontSize: 16,
// //     color: "#4B5563"
// //   },
// //   count: {
// //     fontSize: 16,
// //     fontWeight: "bold",
// //     color: "#7B1E3A",
// //     marginVertical: 12
// //   },
// //   row: {
// //     flexDirection: "row",
// //     marginTop: 8
// //   },
// //   button: {
// //     backgroundColor: "#7B1E3A",
// //     paddingVertical: 12,
// //     paddingHorizontal: 20,
// //     borderRadius: 8,
// //     marginHorizontal: 6
// //   },
// //   buttonText: {
// //     color: "#FFFFF",
// //     fontSize: 16,
// //     fontWeight: "bold"
// //   }
// // });
// // Bir component'i birden çok kez kullandığımızda ne olur? Her kullanım kendi state'ine sahip olur. Bunu bir beğeni butonu ile görelim.

// // import {Pressable, StyleSheet, Text, View} from "react-native";
// // import {useState} from "react";

// // interface PostCardProps {
// //   title: string;
// // }

// // function PostCard({title} : PostCardProps){
// //   const [likes, setLikes] = useState(0);

// //   return (
// //     <View style = {styles.card}>

// //       <Text style = {styles.cardTitle}>{title}</Text>
// //       <Text style = {styles.likeText}>Beğeni: {likes}</Text>

// //       <Pressable

// //         style = {styles.button}
// //         onPress = {() => setLikes(likes + 1)}
// //         >
// //         <Text style = {styles.buttonText}>Beğen</Text>
// //         </Pressable>
// //     </View>
// //   );
// // }

// // export default function App(){
// //   return (
// //     <View style = {styles.container}>
// //       <PostCard title = "React Native" /> 
// // {/* Burada PostCard component'i iki kez kullanılıyor ancak her biri kendi state'ine sahip. */}
// //       <PostCard title = "TypeScript" />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#F3F4F6",
// //     justifyContent: "center",
// //   },
// //   card: {
// //    backgroundColor: "rgba(121, 147, 16, 0.66)",
// //    width: 300,
// //    padding: 16,
// //    borderRadius: 12,
// //    marginBottom: 12
// //   },
// //   cardTitle: {
// //     fontWeight: "bold"
// //   },
// //   button: {
// //     backgroundColor:  "rgba(0, 112, 224, 0.79)",
// //     paddingVertical: 13,
// //     paddingHorizontal: 25,
// //     borderRadius: 2,
// //     marginHorizontal: 6
// //   },
// //   buttonText: {
// //     color: "#FFFF",
// //     fontSize: 16,
// //     fontWeight: "bold"
// //   },
// //   likeText: {
// //     backgroundColor: "rgba(209, 82, 18, 0.89)"
// //   }
// // })

// // // UYGULAMA Ders Kartları Uygulaması 
// // import{Pressable, View, Text, StyleSheet} from "react-native";
// // import {useState} from "react";

// // interface Course {
// //   id: number;
// //   name: string;
// //   instructor: string;
// //   credit: number;
// // }

// // function CourseCard({name, instructor, credit} : CourseCardProps) {
// //   return (
// //     <View>
// //       <Text style = {styles.name}>{name}</Text>
// //       <Text style = {styles.info}>{instructor}</Text>
// //       <Text style = {styles.info}>{credit}</Text>
// //     </View>
// //   );
// // }
// // interface CourseCardProps {
// //   name: string;
// //   instructor: string,
// //   credit: number
// // }

// // const courses : Course[] = [
// //   {
// //     id: 1,
// //     name: "Veri Yapıları",
// //     instructor: "Fatih Kocamaz",
// //     credit: 6 
// //   },
// //   {
// //     id: 2,
// //     name: "Veri Tabanı Yönetim Sistemleri",
// //     instructor: "Arif Aydın",
// //     credit: 7
// //   },
// //   {
// //     id: 3,
// //     name: "Otomata",
// //     instructor: "Abdullah Ateş",
// //     credit: 18
// //   }
// // ]

// // export default function App(){
// //   return (
// //     <View style = {styles.container}>
// //       <Text style = {styles.baseTitle}> Derslerim </Text>
    
// //       {courses.map(course => (
// //         <CourseCard

// //       ))}

// //     </View>
// //   )
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#F3F4F6",
// //     justifyContent: "center",
// //     alignItems: "center"
// //   },
// //   info: {
// //     backgroundColor: "rgba(208, 151, 37, 0.81)",
// //     width: 300,
// //     padding: 16,
// //     borderRadius: 12,
// //     marginBottom: 12
// //   },
// //   name: {
// //     color: "rgb(8, 103, 198)",
// //     fontSize: 15,
// //     fontWeight: "bold"
// //   },
// //   baseTitle: {
// //     color: "rgba(125, 23, 227, 0.8)",
// //     fontSize: 30,
// //     fontWeight : "bold"
// //   } 
// // })

// // // Yetersiz hissedildiğinden dolaryı hafta 1 ve hafta 2 tekrarı.

// // import {StyleSheet, Text, View} from "react-native";

// // export default function App(){
// //   return (
// //     <View style = {styles.container}>
// //       <Text>Hafta 1 tekrarı.</Text>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,  // container içinde boşluğu ne kadar dolduracağını belirler.
// //     justifyContent: "center", // Ögelerin yatayda nasıl hizalanacağıni belirler.
// //     alignItems: "center" // Ögelerin dikeyde nasıl hizalanacağını beliler. 
// //   }
// // });

// // map(), bir array'in her elementini dönüştürerek yeni bir array oluşturur. Özgün array değişmez.

// // filter(), bir koşulu sağlayan elementlerden yeni bir array oluşturur.

// // find(), koşulu sağlayan ilk elementi döndürür.

// // Karşılaştırmalarda == değil === kullan. Hem değeri hem de tipi kontrol eder.

// // Destructuring

// // Border : Kenar.

// // margin : Component'in dış boşluğu.
// // padding : Component'in iç boşluğu.

// // React Native'de component'lerin ekrandaki layout'u FlexBox ile belirlenir.
// // flex, flexDirection, justifyContent, alignItems

// // UYGULAMA Yatay Kart Örneği

// // import {StyleSheet, View, Text} from "react-native";

// // const technologies = ["React Native", "Expo", "TypeScript"];

// // export default function App(){
// //   return (
// //     <View style = {styles.container}>
// //       <View style = {styles.row}>
// //         {technologies.map(tech => (
// //           <View key = {tech} style = {styles.box}>
// //             <Text style = {styles.boxText}>{tech}</Text>
// //           </View>
// //         ))}
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center"
// //   },
// //   row: {
// //     flexDirection: "row",
// //     justifyContent: "space-around"
// //   },
// //   box: {
// //     backgroundColor: "#E5E7EB",
// //     paddingVertical: 14,
// //     paddingHorizontal: 10,
// //     borderRadius: 8,
// //     width: 100,
// //     alignItems: "center"
// //   },
// //   boxText: {
// //     fontSize: 13,
// //     color: "#1F2937"
// //   }
// // });

// // // UYGULAMA İlk Mobil Profil Kartı

// // import {Pressable, StyleSheet, Text, View} from "react-native";

// // const student = {
// //   name: "İbrahim Halil Yıldırım",
// //   department : "Bilgisayar Mühendsiliği",
// //   grade: 3
// // };

// // export default function App(){
// //   return (
// //     <View style = {styles.container}>
// //       <View style = {styles.card}>
// //         <Text style = {styles.name}>{student.name}</Text>
// //         <Text style = {styles.info}>{student.department}</Text>
// //         <Text style = {styles.info}>{student.grade}</Text>

// //         <Pressable
// //           style = {styles.button}
// //           onPress = {() => console.log("Profil Görüntülendi.")}
// //         >
// //           <Text style = {styles.buttonText}>Profili Gör</Text>
// //         </Pressable>
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#F3F",
// //     justifyContent: "center",
// //     alignItems: "center"
// //   },
// //   card: {
// //     backgroundColor: "#2342",
// //     width: 280,
// //     padding: 24,
// //     borderRadius: 16,
// //     alignItems: "center"
// //   },
// //   name: {
// //     fontSize: 22,
// //     fontWeight: "bold",
// //     color: "#1F2937"
// //   },
// //   info: {
// //     fontSize: 15,
// //     color: "#4B5563",
// //     marginTop: 4
// //   },
// //   button: {
// //     backgroundColor: "#7B1E3A",
// //     paddingVertical: 10,
// //     paddingHorizontal: 20,
// //     borderRadius: 8,
// //     marginTop: 16
// //   },
// //   buttonText: {
// //     color: "#FFFFFF",
// //     fontSize: 15,
// //     fontWeight: "bold"
// //   }
// // });

// // // ÇÖZÜMLÜ UYGULAMA Uzunluğu beş karakterden büyük kelimeleri kartlarda gösteren uygulama.

// // const technologies = [
// //   "React", "Expo", "TypeScript", "JavaScript", "Node"
// // ];

// // // Çözümde filter(), map() kullanılmalı.
// // import {StyleSheet,Pressable, View, Text} from "react-native";

// // const filteredTechnologies = technologies.filter(tech =>
// //   tech.length > 5); // diziyi filtreliyoruz ve karakter uzunluğu beşten büyük olanları yeni bir diziye ekliyoruz.

// // console.log({technologies});
// // console.log({filteredTechnologies});

// // export default function App(){
// //   return(
// //     <View style = {styles.container}>
// //       <Text style = {styles.titleText}>Karakter Sayısı Beşten Büyük Olanlar</Text>
// //       <Text style = {styles.text}>{filteredTechnologies}</Text>
// //     </View>
// //   )
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: "center",
// //     justifyContent: "center",
// //     backgroundColor: "#00ba66d4"
// //   },
// //   titleText: {
// //     color: "blue",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     fontSize: 20,
// //     fontWeight: "bold"
// //   },
// //   text: {
// //   color: "black",
// //   fontSize: 15,
// //   justifyContent: "space-around"
// //   }
// // })

// // // ALIŞTIRMA KOLAY

// // import {View, Text, StyleSheet} from "react-native";

// // const student = {
// //   name: "İbrahim Halil Yıldırım",
// //   department: "Computer Engineering",
// //   grade: 3
// // }

// // export default function App(){
// //   return (
// //     <View style = {styles.container}>
// //       <View style = {styles.card}>
// //         <Text style = {styles.text}>{student.name}</Text>
// //         <Text style = {styles.text}>{student.department}</Text>
// //         <Text style = {styles.text}>{student.grade}</Text>
// //       </View>
// //     </View>
// //   )
// // }


// // // container, card, text
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: "center",
// //     justifyContent: "center",
// //     backgroundColor: "rgb(16, 98, 181)"
// //   },
// //   card: {
// //     alignItems: "center",
// //     justifyContent: "center",
// //     width: 300,
// //     height: 150,
// //     backgroundColor: "#9aadc1",
// //     borderRadius: 20 
// //   },
// //   text: {
// //     fontSize: 15,
// //     fontWeight: "bold",
// //     color: "black"
// //   }
// // })

// // ALIŞTIRMA KOLAY

// // import {StyleSheet, View} from "react-native";

// // export default function App(){
// //   return(
// //     <View style = {styles.container}>
// //       <View style = {styles.generalZone}>
// //         <View style = {styles.boxOne}></View>
// //         <View style = {styles.boxTwo}></View>
// //         <View style = {styles.boxThree}></View>
// //       </View>
// //     </View>
// //   )
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   generalZone: {
// //     alignItems: "center",
// //     justifyContent: "space-around",
// //     flexDirection: "row",
// //     width: 300,
// //     height: 200,
// //     backgroundColor: "rgba(117, 53, 103, 0.82)"
// //   },
// //   boxOne: {
// //     justifyContent: "center",
// //     alignItems: "center",
// //     width: 75,
// //     height: 75,
// //     backgroundColor: "yellow"
// //   },
// //   boxTwo: {
// //     justifyContent: "center",
// //     alignItems: "center",
// //     width: 75,
// //     height: 75,
// //     backgroundColor: "blue"
// //   },
// //   boxThree: {
// //     justifyContent: "center",
// //     alignItems: "center",
// //     width: 75,
// //     height: 75,
// //     backgroundColor: "red"
// //   }
// // });

// // // ALIŞTIRMA ORTA

// // // odd: tek, even: çift

// // const numberArray = [3,8,12,5,7,20];

// // const evenNumbers = numberArray.filter(number => number % 2 === 0);

// // console.log(evenNumbers);

// // // ALIŞTIRMA ORTA
// // import {Pressable, View, Text, StyleSheet} from "react-native";

// // const students = ["Ali", "Ayşe", "Mehmet", "Zeynep"];

// // export default function App(){
// //   const newStudentArray = students.map((student) => (
// //     <Text key = {student}> {student} </Text>))
  
// //   return (
// //     <View style = {styles.container}>
// //       <Text style = {styles.title}>   Öğrenciler</Text>
// //       <View style = {styles.card}>
// //         {newStudentArray}
// //       </View>
// //     </View>
// //   )
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: "center",
// //     justifyContent: "center",
// //     flexDirection: "column"

// //   },
// //   title: {
// //     fontSize: 30,
// //     fontWeight: "bold",
// //     paddingTop: 10,
// //     color: "red",
// //     width: 180,
// //     height: 100,
// //     alignItems: "center",
// //     justifyContent: "center"
// //   },
// //   baseText: {
// //     fontSize: 15,
// //     color: "black",
// //     alignItems: "center",
// //     justifyContent: "center"
// //   },
// //   card: {
// //     flexDirection: "column",
// //     alignItems: "center",
// //     justifyContent: "space-around",
// //     backgroundColor: "#5dc2db54",
// //     borderRadius: 20,
// //     width: 100,
// //     height: 200
// //   }
// // })

// // // ALIŞTIRMA ZOR

// // import {View, Text, StyleSheet} from "react-native";

// // const products = [
// //   {id: 1, name: "Kulaklık", price: 850},
// //   {id: 2, name: "telefon", price: 24000},
// //   {id: 3, name: "Klavye", price: 1200},
// //   {id: 4, name: "Mouse", price: 600}
// // ];

// // const expensiveProducts = products.filter(product => product.price > 1000);

// // export default function App(){
// //   return (
// //     <View style = {styles.container}>
// //       <View style = {styles.cardContainer}>
// //         {expensiveProducts.map(product => (
// //           <View key = {product.id} style = {styles.productCard}>
// //             <Text style = {styles.productName}>{product.name}</Text>
// //             <Text style = {styles.productPrice}>{product.price}</Text>
// //         </View>
// //         ))}
// //       </View>
// //     </View>
// //   )
// // }

// // const styles = StyleSheet.create ({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center"
// //   },
// //   cardContainer: {
// //     backgroundColor: "#12844d91",
// //     width: 400,
// //     height: 600,
// //     borderRadius: 20,
// //     justifyContent: "center",
// //     alignItems: "center"
// //   },
// //   productName: {
// //     fontSize: 18,
// //     fontWeight: "bold",
// //     color: "#333"
// //   },
// //   productPrice: {
// //     fontSize: 15,
// //     color: "#green",
// //     marginTop: 5
// //   },
// //   productCard: {
// //     backgroundColor: "white",
// //     padding: 15,
// //     marginVertical: 10,
// //     borderRadius: 10,
// //     width: 250,
// //     alignItems: "center"
// //   }
// // });

// // // HAFTA 1 ÖDEV

// // import {Pressable, View, StyleSheet, Text} from "react-native";
// // // map() function'ı sadece dizilerle çalışır. Object'lerle çalışmaz.
// // const student = {
// //   name: "İbrahim Halil Yıldırım",
// //   department: "Computer Engineering",
// //   grade: "3",
// // }

// // const interests = ["Photographing", "Running", "Reading"]

// // export default function App(){
// //   return (
// //     <View style = {styles.container}>
// //       <View style = {styles.infoCard}>
// //         <Text style = {styles.nameText}>{student.name}</Text>
// //         <Text style = {styles.text}>{student.department}</Text>
// //         <Text style = {styles.text}>{student.grade}</Text>
      
// //         {interests.map(elements => (
// //           <Text style = {styles.text}>{elements}</Text>)
// //         )}
// //         </View>
// //     </View>
// //   )
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center"
// //   },
// //   infoCard: {
// //     backgroundColor: "#a1ebab",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     width: 300,
// //     height: 300
// //   },
// //   text: {
// //     fontSize: 15,
// //     color: "black",
// //   },
// //   nameText: {
// //     fontSize: 30,
// //     fontWeight: "bold",
// //     color: "grey"
// //   }
// // })

// // Değişken tanımlarken türünü dilin kendisinin anlamasına type inference (tip çıkarımı) denir.

// // interface bir object'in hangi property'lere sahip olacağını ve her property'nin tipinin ne olduğunu tanımlar.

// // interface Student {
// //   name: string;
// //   grade: number;
// // }


// // interface Student {
// //     id: number;
// //     name: string;
// //     department: string;
// // }
// // const students: Student[] = [
// // {    id: 1,
// //     name: "Ali",
// //     department: "Bilgisayar Mühendisliği"
// // },
// // {
// //     id: 2,
// //     name: "Ayşe",
// //     department: "Bilgisayar Mühendisliği"
// // }
// // ];

// // export default function App(){
// //     {students.map(student => (
// //         <StudentCard
// //             key = {student.id}
// //             name = {student.name}
// //             department = {student.department}
// //         />
// //     ))}
// // }

// // Props dışarıdan gelir ve component onu değiştiremez.
// // import {useState} from "react";

// // import {View, Text, StyleSheet, Pressable} from "react-native";
// // import {useState} from "react";


// // export default function App(){

// //     const [count, setCount] = useState(0);

// //     return(
// //         <View style = {styles.container}>
// //                 <Text style = {styles.count}>{count}</Text>
// //             <View style = {styles.buttonContainer}>
// //                   <Pressable
// //                     style = {styles.button}
// //                     onPress = {() => setCount(count + 1)}
// //                     >
// //                     <Text style = {styles.buttonText}>Artır</Text>
// //                   </Pressable>
// //                   <Pressable
// //                     style = {styles.button}
// //                     onPress = {() => setCount(count - 1)}
// //                     >
// //                     <Text style = {styles.buttonText}>Azalt</Text>
// //                  </Pressable>
// //             </View>
// //         </View>
// //     )
// // }
// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         alignItems: "center",
// //         justifyContent: "space-between",
// //     },
// //     buttonContainer:{
// //         flex: 1,
// //         alignItems: "center",
// //         justifyContent: "space-between",
// //         flexDirection: "row",
// //         width: 150
// //     },
// //     buttonText: {
// //         fontSize: 15,
// //         color: "black"
// //     },
// //     button: {
// //         justifyContent: "center",
// //         alignItems: "center",
// //         width: 50,
// //         height: 50,
// //         backgroundColor: "#60aaac4e"
// //     },
// //     count: {
// //         fontSize: 50,
// //         color: "red",
// //         paddingTop: 200,
// //     }
// // })

// // const [loggedIn, setLoggedIn] = useState(false);

// // {loggedIn ? (
// //     <Text> Hoş Geldiniz.</Text>
// // ) : (
// //     <Text> Giriş Yapınız.</Text>
// // )}

// // <Pressable
// //     style = {loggedIn ? styles.buttonOn : styles.button}
// // ></Pressable>

// // import {StyleSheet, Text, View} from "react-native";

// // interface Student {
// //     id: number,
// //     name: string,
// //     department: string,
// //     grade: number;
// // }
// // interface StudentCardProps {
// //     name: string;
// //     department: string;
// //     grade: number;
// // }

// // const students: Student[] = [
// //     {
// //         id: 1,
// //         name: "Ali Yıldız",
// //         department: "Bilgisayar Mühendisliği",
// //         grade: 2
// //     },
// //     {
// //         id: 2,
// //         name: "Ayşe Demir",
// //         department: "Bilgisayar Mühendisliği",
// //         grade: 3
// //     },
// //     {
// //         id: 3,
// //         name: "Mehmet Kaya",
// //         department: "Yazılım Mühendisliği",
// //         grade: 1
// //     }
// // ];

// // function StudentCard({name, department, grade
// // } : StudentCardProps) {
// //     return (
// //         <View style = {styles.card}>
// //             <Text style = {styles.name}>{name}</Text>
// //             <Text style = {styles.info}>{department}</Text>
// //             <Text style = {styles.info}>{grade}</Text>
// //         </View>
// //     );
// // }

// // export default function App(){
// //     return (
// //         <View style = {styles.container}>
// //             <Text style = {styles.title}>Öğrenci Listesi</Text>

// //             {students.map(student => (
// //                 <StudentCard
// //                     key = {student.id}
// //                     name = {student.name}
// //                     department = {student.department}
// //                     grade = {student.grade}
// //                 />
// //             ))}
// //         </View>
// //     );
// // }

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         backgroundColor: "#F3F4F6",
// //         paddingTop: 60,
// //         alignItems: "center"
// //     },
// //     title: {
// //         fontSize: 20,
// //         fontWeight: "bold",
// //         color: "#1F2937",
// //         marginBottom: 16
// //     },
// //     card: {
// //         backgroundColor: "FFFFFF",
// //         width: 300,
// //         padding: 16,
// //         borderRadius: 12,
// //         marginBottom: 12
// //     },
// //     name: {
// //         fontSize: 17,
// //         fontWeight: "bold",
// //         color: "#7B1E3A"
// //     },
// //     info: {
// //         fontSize: 14,
// //         color: "#4B5563",
// //         marginTop: 3
// //     }
// // });

// // import {Pressable, View, StyleSheet, Text} from "react-native";
// // import {useState} from "react";

// // export default function App(){
// //     const [count, setCount] = useState(0);

// //     return (
// //         <View style = {styles.container}>
// //             <Text style = {styles.label}>Sayaç</Text>
// //             <Text style = {styles.count}>{count}</Text>

// //             <View style = {styles.row}>
// //                 <Pressable
// //                     style = {styles.button}
// //                     onPress={() => setCount(count - 1)}
// //                 >
// //                     <Text style = {styles.buttonText}>-</Text>
// //                 </Pressable>
                
// //                 <Pressable
// //                     style = {styles.button}
// //                     onPress = {() => setCount(0)}
// //                 >
// //                     <Text style = {styles.buttonText}>Sıfırla</Text>
// //                 </Pressable>

// //                 <Pressable
// //                     style = {styles.button}
// //                     onPress = {() => setCount(count + 1)}
// //                 >
// //                     <Text style = {styles.buttonText}>+</Text>
// //                 </Pressable>
// //             </View>
// //         </View>
// //     );
// // }

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         backgroundColor: "#F3F4F6",
// //         justifyContent: "center",
// //         alignItems: "center"
// //     },
// //     label: {
// //         fontSize: 16,
// //         color: "#4B5563",
// //     },
// //     count: {
// //         fontSize: 64,
// //         fontWeight: "bold",
// //         color: "#7B1E3A",
// //         marginVertical: 12
// //     },
// //     row: {
// //         flexDirection: "row",
// //         marginTop: 8
// //     },
// //     button: {
// //         backgroundColor: "7B1E3A",
// //         paddingVertical: 12,
// //         paddingHorizontal: 20,
// //         borderRadius: 8,
// //         marginHorizontal: 6
// //     },
// //     buttonText: {
// //         color: "#000000",
// //         fontSize: 16,
// //         fontWeight: "bold"
// //     }
// // });

// // // Bir component'i birden çok kez kullandığımızda ne olur? Her kullanılm kendi state'ine shaip olur. Bunu bir beğeni butonu ile görelim.

// // import {Pressable, Text, View, StyleSheet} from "react-native";
// // import {useState} from "react";


// // interface PostCardProps {
// //     title: string;
// // }
// // function PostCard({title}: PostCardProps){
// //     const [likes, setLikes] = useState(0);
// //     return (
// //         <View style = {styles.card}>
// //             <Text style = {styles.cardTitle}>{title}</Text>
// //             <Text style = {styles.likeText}>Beğeni: {likes}</Text>

// //             <Pressable
// //                 style = {styles.button}
// //                 onPress = {() => setLikes(likes + 1)}
// //             >
// //                 <Text style = {styles.buttonText}>Beğen</Text>
// //             </Pressable>
// //         </View>
// //     );
// // }
// // export default function App(){
// //     return (
// //         <View style = {styles.container}>
// //             <PostCard title = "React Native" />
// //         </View>
// //     )
// // }

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         alignItems: "center",
// //         justifyContent: "center"
// //     },
// //     buttonText: {
// //         fontSize: 15,
// //         color: "black"
// //     },
// //     button: {
// //         backgroundColor: "rgba(152, 168, 136, 0.31)",
// //         width: 100,
// //         height: 100
// //     },
// //     cardTitle: {
// //         fontSize: 40,
// //         fontWeight: "bold",
// //         color: "#5e7172"
// //     },
// //     likeText: {
// //         fontSize: 20,
// //         color: "yellow"
// //     },
// //     card: {
// //         backgroundColor: "grey",
// //         width: 300,
// //         height: 300
// //     }
// // })

// // // ALIŞTIRMA DERS KARTLARI UYGULAMASI
// // import {StyleSheet, View, Text, Pressable} from "react-native";
// // import {useState} from "react";

// // interface Course {
// //     id: number;
// //     name: string;
// //     instructor: string;
// //     credit: number,
// // }

// // interface CourseCardProps {
// //     name: string;
// //     instructor: string;
// //     credit: number;
// // }

// // function CourseCard ({name, instructor, credit} : CourseCardProps){
// //     const [favourite, setFavourite] = useState(false);

// //     return (
// //         <View style = {styles.card}>
// //             <Text style = {styles.nameText}>{name}</Text>
// //             <Text style = {styles.infoText}>{instructor}</Text>
// //             <Text style = {styles.infoText}>{credit}</Text>

// //             <Pressable style = {styles.button}
// //                 onPress = {() => setFavourite(!favourite)}
// //             >
// //                 <Text> {favourite ? "Favorilerden çıkar." : "Favorilere ekle."}</Text>
// //             </Pressable>
// //         </View>
// //     );
// // }

// // const courses: Course[] = [
// //     {
// //         id: 1,
// //         name: "Veri Yapıları",
// //         instructor: "Adnan Fatih Kocamaz",
// //         credit: 7
// //     },
// //     {
// //         id: 2,
// //         name: "Veri Tabanı Yönetim Sistemleri",
// //         instructor: "Ahmet Arif Aydın",
// //         credit: 6
// //     },
// //     {
// //         id: 3,
// //         name: "İşletim Sistemleri",
// //         instructor: "Abdullah Ateş",
// //         credit: 5
// //     }
// // ];

// // export default function App(){
// //     return (
// //         <View style = {styles.container}>
// //             {courses.map(course => (
// //                 <CourseCard
// //                     key = {course.id}
// //                     name = {course.name}
// //                     instructor = {course.instructor}
// //                     credit = {course.credit}
// //                 />
// //             ))}
// //         </View>
// //     )
// // }

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         alignItems: "center",
// //         justifyContent: "center"
// //     },
// //     cardTitle: {
// //         fontSize: 50,
// //         fontWeight: "bold",
// //         color: "#2e3f37",
// //     },
// //     nameText: {
// //         fontSize: 50,
// //         color: "black"
// //     },
// //     infoText: {
// //         fontSize: 15
// //     },
// //     button: {
// //         backgroundColor: "rgb(128, 176, 224)",
// //         paddingVertical: 10,
// //         borderRadius: 10
// //     },
// //     buttonText: {
// //         fontSize: 20,
// //         color: "black"
// //     },
// //     card: {
// //         backgroundColor: "#f2f4f6",
// //         width: 300,
// //         paddingVertical: 20
// //     }
// // })

// // // HAFTANIN ÖDEVİ TO DO LIST UYGULAMASI

// // ÇÖZÜMLÜ ÖRNEK YENİDEN ÇÖZÜM DERS KARTLARI UYGULAMASI

// // import {Pressable, View, Text, StyleSheet} from "react-native";
// // import {useState} from "react";

// // interface Course {
// //     id: number;
// //     name: string;
// //     instructor: string;
// //     credit: number;
// // }

// // interface CourseCardProps {
// //     name: string;
// //     instructor: string;
// //     credit: number;
// // }

// // const courses: Course[] = [
// //     {
// //         id: 1,
// //         name: "Veri Organizasyonu",
// //         instructor: "Ahmet Arif Aydın",
// //         credit: 6
// //     },
// //     {
// //         id: 2,
// //         name: "Otomata",
// //         instructor: "Abdullah Ateş",
// //         credit: 7
// //     },
// //     {
// //         id: 3,
// //         name: "Görüntü İşleme",
// //         instructor: "Muhammed Fatih Talu",
// //         credit: 19
// //     }
// // ]

// // function CourseCard ({name, instructor, credit} : CourseCardProps){
// //     const [favorite, setFavorite] = useState(false);

// //     return(
// //         <View style = {styles.courseCard}>
// //             <Text style = {styles.nameText}>{name}</Text>
// //             <Text style = {styles.infoText}>{instructor}</Text>
// //             <Text style = {styles.infoText}>{credit}</Text>

// //             <Pressable style = {styles.button}
// //                 onPress = {() => setFavorite(!favorite)}
// //             >
// //                 <Text> {favorite ? "Favorilerden çıkar." : "Favorilere ekle."} </Text>
// //             </Pressable>
// //         </View>) 
// // }

// // export default function App(){
// //     return (
// //         <View style = {styles.container}>
// //             {courses.map(course =>
// //                 (<CourseCard
// //                     key = {course.id}
// //                     name = {course.name}
// //                     instructor = {course.instructor}
// //                     credit = {course.credit}
// //                 />
// //             ))}
// //         </View>
// //     )
// // }

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         justifyContent: "center",
// //         alignItems: "center"
// //     },
// //     courseCard: {
// //         backgroundColor: "grey",
// //         width: 200,
// //         height: 200
// //     },
// //     nameText: {
// //         fontSize: 25,
// //         fontWeight: "bold",
// //         color: "black"
// //     },
// //     infoText: {
// //         fontSize: 15,
// //         color: "black"
// //     },
// //     button: {
// //         backgroundColor: "#4d6364",
// //         width: 100,
// //         height: 100
// //     }
// // });

// // Padding kutunun içine, margin kutunun dışına boşluk koyar.
// // Bir karta margin verirsek kart aynı kalır ama komşusuyla arasındaki mesafe büyür.

// // justifyContent her zaman ana eksende ve alignItems her zaman çapraz eksende çalışır.
// // Ancak flexDirection'ı değiştirdiğimizde bu iki property'nin hangi yönde iş yaptığı da değişir.

// // Responsive tasarım: Arayüzün, çalştığı cihazın ekran boyutuna göre kendini bozulmadan düzenleyebilmesidir.

// // Safe area: Adından da anlaşılacağı üzere ekranın sistem ögeleriyle çakışmayan ve içeriğin güvenle gösterilebileceği bölgedir.

// // Yerel görsel.
// // Projenin içerisinde bulunan bir dosya require() ile yüklenir.

// {/* <Image
//   style = {styles.logo}
//   source = {require("./assets/icon.png")}
// /> */}

// // Uzak görsel.
// // İnternetten gelen bir görselde source bir object'dir ve "uri" property'si taşır.

// // <Image
// //   style = {styles.logo}
// //   source = {{uri: "https.//reactnative.dev/img/tiny_logo.png"}}
// // />

// // require() ile gelen görsellerde width ve height değerleri opsiyoneldir.
// // Ancak internetten uri ile gelen görsellerde bu zorunludur. Boyutları belirtilmezse
// // görsel hiç görünmez ve herhangi bir hata alınmaz.

// // Kare bir görseli daireye çevirmenin yolu, borderRadius değerini genişliğin yarısına eşitlemektir.

// // cover: Görsel kutuyu tamamen doldurur. Taşan kısım kırpılır. Varsayılan değerdir.
// // contain: Görselin tamaı kutuya sığdırılır. Kırpma olmaz ama kutuda boşluk kalabilir.


// // Kaydırılabilir bir ekrana sahip olmak için ScrollView kullanılır.
// // import {ScrollView, StyleSheet, Text} from "react-native";

// // function AboutScreen(){
// //   return (
// //     <ScrollView contentContainerStyle = {styles.content}>
// //       <Text style = {styles.title}>Hakkımda</Text>
// //       {/* ekrandan uzun içerik */}
// //     </ScrollView>
// //   );
// // }

// // ScrollView'da style kaydırma penceresine, contentContainerStyle ise içeriğe uygulanır.
// // İç boşluk(padding) ve içeriğin hizalanması contentContainerStyle içine yazılır.

// // AYRICA ScrollView'ın flex: 1 yazılmaz. Bu içeriği ekran boyutuna sıkıştırır ve kaydırılması planlanan ekranın
// // tek bir ekran olması anlamına gelir. Her şey sıkıştığı için çok küçük görünür.

// // ScrollView çok fazla çocuğunun olacağı durumlarda kullanılmaz. Çünkü ScrollView her şeyi aynı anda oluşturur.
// // Bu da çok çok aşağıda kalan şeylerin bile ilk andan yüklemesi ve uygulamanın yavaşlaması anlamına gelir.
// // Bu sebeple böyle durumlarda FlatList kullanılır. İlerliyen haftalarda göreceğiz.

// // Aynı yapı çok kez tekrar ediyorsa o yapı component haline getirilmelidir. İş yükünü azaltır.

// // Yüksekliğin yarısına eşit bir borderRadius'un kareyi 

// // Bir butonun duruma göre iki farklı görünümü varsa bu boolean bir değer ile belirlenir.

// // Bir component'in props sayısı altıyı geçiyorsa, muhtelemen onu ikiye bölmenin zamanı gelmiştir.

// // Genel kabul fontSize'lar.

// // Başlık 24-28.
// // Alt başlık 18-20.
// // Normal metin 14-16.
// // Yardımcı metin 12-14.

// // Font boyutlar ve renk paletleri her ekran için 3-4 olduğu durumda normal kabul edilir.

// // // ÖRNEK 3.1 ÖĞRENCİ PROFİL EKRANI
// // import {Image, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
// // import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

// // interface StatCardProps {
// //   value: string;
// //   label: string;
// // }

// // function StatCard({value, label}: StatCardProps) {
// //   return(
// //     <View style = {styles.statCard}>
// //       <Text style = {styles.statValue}>{value}</Text>
// //       <Text style = {styles.statLabel}>{label}</Text>
// //     </View>
// //   );
// // }

// // interface BadgeProps{
// //   label: string;
// // }
// // function Badge({label}: BadgeProps){
// //   return(
// //     <View style = {styles.badge}>
// //       <Text style = {styles.badgeText}>{label}</Text>
// //     </View>
// //   );
// // }

// // interface AppButtonProps{
// //   title: string;
// //   onPress: () => void;
// // }

// // function AppButton({title, onPress}: AppButtonProps){
// //   return(
// //     <Pressable style = {styles.button} onPress = {onPress}>
// //       <Text style = {styles.buttonText}>{title}</Text>
// //     </Pressable>
// //   );
// // }

// // const interests: string[] = [
// //   "Artifical Intelligence",
// //   "Game Developing",
// //   "UI Design"
// // ];

// // function ProfileScreen(){
// //   return(
// //     <SafeAreaView style = {styles.safe} edges = {["top", "bottom"]}>
// //       <ScrollView contentContainerStyle = {styles.content}>

// //         <View style = {styles.header}>
// //           <Image
// //             style = {styles.avatar}
// //             source = {require("./assets/myAssets/Benn.png")}
// //           />
// //             <Text style = {styles.name}>İbrahim Halil Yıldırım</Text>
// //             <Text style = {styles.department}>Computer Engineering</Text>
// //         </View>

// //         <View style = {styles.stats}>
// //           <StatCard value = "3" label = "Class"/>
// //           <StatCard value = "12" label = "Project"/>
// //           <StatCard value = "8" label = "Course"/>
// //         </View>

// //           <Text style = {styles.sectionTitle}>About me.</Text>
// //           <Text style = {styles.paragraph}>
// //           I'm working about mobil application and game design. I'm learning to design UI with React Native.
// //           </Text>

// //           <Text style = {styles.sectionTitle}>Interests</Text>
// //         <View style = {styles.badges}>
// //           {interests.map((item) => (
// //             <Badge key = {item} label = {item} />
// //           ))}
// //         </View>

// //         <AppButton
// //           title = "Edit Profile"
// //           onPress = {() => console.log("Editing Profile...")}
// //         />
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // }

// // export default function App(){
// //   return(
// //     <SafeAreaProvider>
// //       <ProfileScreen />
// //     </SafeAreaProvider>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   safe: {
// //     flex: 1,
// //     backgroundColor: "#F5F7FA"
// //   },
  
// //   content: {
// //     padding: 20,
// //     paddingBottom: 32
// //   },
// //   header: {
// //     alignItems: "center",
// //     marginBottom: 20
// //   },

// //   avatar: {
// //     width: 100,
// //     height: 100,
// //     borderRadius: 50,
// //     marginBottom: 12,
// //     backgroundColor: "#E37ED"
// //   },

// //   name: {
// //     fontSize: 24,
// //     fontWeight: "700",
// //     color: "#202124"
// //   },

// //   department: {
// //     fontSize: 14,
// //     color: "#666665",
// //     marginTop: 2
// //   },

// //   stats: {
// //     flexDirection: "row",
// //     marginBottom: 20
// //   },

// //   statCard: {
// //     flex: 1,
// //     backgroundColor: "#FFFFFF",
// //     borderRadius: 16,
// //     paddingVertical: 16,
// //     alignItems: "center",
// //     marginHorizontal: 4
// //   },

// //   statValue: {
// //     fontSize: 20,
// //     fontWeight: "700",
// //     color: "#7B1E3A"
// //   },

// //   statLabel: {
// //     fontSize: 12,
// //     color: "#666665",
// //     marginTop: 2
// //   },

// //   sectionTitle: {
// //     fontSize: 18,
// //     fontWeight: "600",
// //     color: "#202124",
// //     marginBottom: 8
// //   },

// //   paragraph: {
// //     fontSize: 14,
// //     lineHeight: 20,
// //     color: "#444444",
// //     marginBottom: 20
// //   },

// //   badges: {
// //     flexDirection: "row",
// //     flexWrap: "wrap", // wrap sayesinde etiketler satıra sığmadığında alt satıra geçmelerini sağlarız.
// //     marginBottom: 24
// //   },

// //   badge: {
// //     backgroundColor: "#E8EDF5",
// //     borderRadius: 999,
// //     paddingHorizontal: 12,
// //     paddingVertical: 6,
// //     marginRight: 8,
// //     marginBottom: 8
// //   },

// //   badgeText: {
// //     fontSize: 13,
// //     color: "#31507A"
// //   },

// //   button: {
// //     backgroundColor: "#7B1E3A",
// //     borderRadius: 12,
// //     paddingVertical: 14,
// //     alignItems: "center"
// //   },

// //   buttonText: {
// //     color: "#FFFFFF",
// //     fontSize: 16,
// //     fontWeight: "600"
// //   }
// // });

// // İKİNCİ UYGULAMA DASHBOARD

// // const stats = [
// //   {id: 1, value: "12", label: "Projeler"},
// //   {id: 2, value: "8", label: "Dersler"},
// //   {id: 3, value: "5", label: "Görevler"}
// // ];

// // function Dashboard() {
// //   return(
// //     <View style = {styles.row}>
// //       {stats.map((item) =>(
// //         <Statcard
// //           key = {item.id}
// //           value = {item.value}
// //           label = {item.label
// //         />
// //       ))}
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   dashboard: {
// //     padding: 20,
// //   },

// //   title: {
// //     fontSize: 24,
// //     fontWeight: "700",
// //     color: "#202124",
// //     marginBottom: 12
// //   },
// //   row: {
// //     flexDirection: "row"
// //   }
// // });


// // HENÜZ BİTMEDİ. ARA VERİLDİ.
// // import {Image, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";

// // interface TechnologyCardProps {
// //   title: string;
// //   description: string;
// //   badge: string:
// // }

// // function TechnologyCard({title, description, badge}: TechnologyCardProps){
// //   return(
// //       <View style = {styles.technologyCard}>
// //     <Text style = {styles.technologyTitle}>{title}</Text>
// //     <Text style = {styles.technologyDescription}>{description}</Text>
// //     <Text style = {styles.technologyBadge}>{badge}</Text>
// //   </View>
// //   );
// // }

// // const styles = StyleSheet.create({

// // });

// // ŞİMDİLİK ERTELENİYOR // ÖRNEK 3.2 TEKRAR KULLANILABİLİR ÜRÜN KARTLARI

// // Alıştırma 3.1 ORTA

// // import {StyleSheet, Text, View} from "react-native";
// // import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
// // interface ProfileCardProps{
// //   name: string;
// //   department: string;
// // }

// // function ProfileCard({name, department}: ProfileCardProps){
// //   return (
// //     <View style = {styles.profileCard}>
// //       <Text style = {styles.profileName}>{name}</Text>
// //       <Text style = {styles.profileDepartment}>{department}</Text>
// //     </View>
// //   );
// // }

// // export default function App(){
// //   return(
// //     <SafeAreaProvider>
// //       <SafeAreaView style = {styles.container}>
// //         <ProfileCard name = "İbrahim Halil Yıldırım" department = "Computer Engineering" />
// //         <ProfileCard name = "Ayşe Demir" department = "Software Engineering" />
// //       </SafeAreaView>
// //     </SafeAreaProvider>
// //   );
// // }


// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //   },
// //   profileCard: {
// //     backgroundColor: "#eccc6e",
// //     paddingBottom: 40,
// //     paddingHorizontal: 20,
// //     borderRadius: 15,
// //     marginBottom: 10,
// //     alignItems: "center",
// //     justifyContent: "center"
// //   },
  
// //   profileName: {
// //     fontSize: 30,
// //     fontWeight: "bold",
// //     color: "black",
// //     marginBottom: 5,
// //     paddingTop: 20,
// //   },

// //   profileDepartment: {
// //     fontSize: 18,
// //     color: "rgba(48, 48, 48, 0.47)",
// //   }
// // });


// ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////

// // HAFTA 2 - 3 Alıştırmalar

// // Verileri bileşenler arasında taşımak için props kullanılır.
// // Parent component, child component'e veri gönderir.
// // Gönderilen verinin türünü güvenceye almak için ise interface kullanılır.
// // Component içinde destructuring yöntemiyle props'lar yakalanır.

// // Örnek

// // import {StyleSheet, Text, View} from "react-native";

// // // Child component'in alacağı verilerin tipini belirliyoruz.

// // interface StudentCardProps{
// //   name: string;
// //   department: string;
// //   grade: number;
// // }

// // // Reusable component'imizi yazıyoruz ve destructuring yapıyoruz.

// // function StudentCard({name, department, grade}: StudentCardProps){
// //   return(
// //     <View style = {styles.card}>
// //       <Text style = {styles.nameText}>{name}</Text>
// //       <Text style = {styles.infoText}>{department}</Text>
// //       <Text style = {styles.infoText}>{grade}</Text>
// //     </View>
// //   );
// // }

// // export default function App(){
// //   return(
// //     <View style = {styles.container}>
// //       <Text style = {styles.title}>Öğrenci Profilleri</Text>
// //       <StudentCard name = "İbrahim Halil Yıldırım" department = "Bilgisayar Mühendisliği" grade = {3} />
// //     </View>
// //   );
// // }
// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: '#F3F4F6', paddingTop: 60, alignItems: 'center' },
// //   title: { fontSize: 20, fontWeight: '700', marginBottom: 16, color: '#1F2937' },
// //   card: { backgroundColor: '#FFFFFF', width: 300, padding: 14, borderRadius: 10, marginBottom: 10 },
// //   nameText: { fontSize: 16, fontWeight: '700', color: '#7B1E3A' },
// //   infoText: { fontSize: 12, color: '#4B5563', marginTop: 2 }
// // });


// ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////

// // Aynı bileşen yapısı props sayesinde farklı verilerle tekrar kullanılabilir.
 

// // import React from 'react';
// // import { StyleSheet, Text, View } from 'react-native';

// // export default function BoxModelExample() {
// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.box}>
// //         <Text style={styles.text}>Box Model Örneği</Text>
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E5E7EB' },
// //   box: {
// //     backgroundColor: '#FFFFFF',      // Kutunun arka plan rengi
// //     borderWidth: 2,                  // Çerçeve kalınlığı (Border)
// //     borderColor: '#7B1E3A',          // Çerçeve rengi
// //     borderRadius: 12,                // Köşe yuvarlama
// //     paddingHorizontal: 20,           // Sağdan/soldan iç boşluk (Padding)
// //     paddingVertical: 16,             // Üstten/alttan iç boşluk (Padding)
// //     margin: 10,                      // Dış boşluk (Margin)
// //   },
// //   text: { fontSize: 14, fontWeight: '600', color: '#1F2937' }
// // });

// // import React from 'react';
// // import { StyleSheet, Text, View } from 'react-native';

// // export default function FlexboxAxesExample() {
// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.rowContainer}>
// //         <View style={styles.box}><Text style={styles.boxText}>A</Text></View>
// //         <View style={styles.box}><Text style={styles.boxText}>B</Text></View>
// //         <View style={styles.box}><Text style={styles.boxText}>C</Text></View>
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { flex: 1, backgroundColor: '#F9FAFB', justifyContent: 'center', alignItems: 'center' },
// //   rowContainer: {
// //     width: '90%', height: 100, backgroundColor: '#E5E7EB', borderRadius: 10,
// //     flexDirection: 'row',          // Ana ekseni YATAY yapar!
// //     justifyContent: 'space-around',// Yatayda eşit dağıtır
// //     alignItems: 'center',          // Dikeyde ortalar
// //   },
// //   box: { width: 50, height: 50, backgroundColor: '#7B1E3A', borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
// //   boxText: { color: '#FFFFFF', fontWeight: 'bold' }
// // // });
// // import { StyleSheet, Text, View } from 'react-native';
// // import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// // export default function SafeAreaExample() {
// //   return (
// //     <SafeAreaProvider>
// //       <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
// //         <View style={styles.content}>
// //           <Text style={styles.title}>Güvenli Alan İçeriği</Text>
// //           <Text style={styles.description}>Bu yazı çentiğin altında kalmaz.</Text>
// //         </View>
// //       </SafeAreaView>
// //     </SafeAreaProvider>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   safeArea: { flex: 1, backgroundColor: '#F5F7FA' },
// //   content: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' },
// //   title: { fontSize: 18, fontWeight: '700', color: '#202124' },
// //   description: { fontSize: 12, color: '#666666', marginTop: 4 }
// // });


// ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////
// // Cihaz çentikleri ve sistem çubuklarıyla içeriğin çakışmaması için SafeAreaProvider en dışa, 
// // SafeAreaView ise ekran içeriklerine uygulanır.

// // import {StyleSheet, Text, View} from "react-native";
// // import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

// // export default function SafeAreaExample() {
// //   return (
// //     <SafeAreaProvider>
// //       <SafeAreaView style = {styles.safeArea} edges = {["top", "bottom"]}>
// //         <View style = {styles.content}>
// //           <Text style = {styles.title}>Güvenli alan içeriği</Text>
// //           <Text style = {styles.description}>Bu yazı çentiğin altında kalmaz.</Text>
// //         </View>
// //       </SafeAreaView>
// //     </SafeAreaProvider>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   safeArea: {flex: 1, backgroundColor: "#F5F7FA"},
// //   content: {flex: 1, padding: 16, justifyContent: "center", alignItems: "center"},
// //   title: {fontSize: 18, fontWeight: "700", color: "#202124"},
// //   description: {fontSize: 12, color: "#666665", marginTop: 4}
// // });

// // Yerel resimler require() ile, internet resimleri {uri: "....."} ile yüklenir.
// // Uzak resimlere width ve height vermek zorunludur. borderRadius'u genişliğin yarısına eşitlersek tam dairesel görünüm elde ederiz.

// // import {Image, StyleSheet, Text, View} from "react-native";

// // export default function ImageExample(){
// //   return(
// //     <View style = {styles.container}>
// //       <Image
// //         source = {{uri: "https://reactnative.dev/img/tiny_logo.png"}}
// //         style = {styles.avatar}
// //         resizeMode = "cover" // Görselin sığdırılma modu.
// //       />
// //       <Text style = {styles.name}>İbrahim Halil Yıldırım</Text>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     backgroundColor: "white"
// //   },

// //   avatar: {
// //     width: 90,
// //     height: 90,
// //     borderRadius: 45,
// //     backgroundColor: "#E3E7ED",
// //     marginBottom: 10
// //   },

// //   name: {
// //     fontSize: 18,
// //     fontWeight: "700", // 100-900 arası. 700 tam bold'a karşılık gelir.
// //     color: "#202124"
// //   }
// // });

// // Ekrana sığmayan uzun içerikler için ScrollView kullanılır.
// // İç boşluklar style yerine contentContainerStyle  içine verilmelidir.
// // ScrollView içerisine flex: 1 verilmemelidir. 
// // Çok daha performans gereken durumlarda ScrollView yerine FlatList (Ekranda görünmeyen ögeleri bellekte tutmaz.) kullanılır.

// // import {ScrollView, StyleSheet, Text, View} from "react-native";

// // export default function ScrollViewExample() {
// //   return(
// //     <ScrollView contentContainerStyle = {styles.scrollContent}>
// //       <Text style = {styles.title}>Uzun Sayfa Başlığı</Text>

// //       <View style = {styles.card}><Text>Kart 1</Text></View>
// //       <View style = {styles.card}><Text>Kart 2</Text></View>
// //       <View style = {styles.card}><Text>Kart 3</Text></View>
// //       <View style = {styles.card}><Text>Kart 4</Text></View>
// //       <View style = {styles.card}><Text>Kart 5</Text></View>
// //       <View style = {styles.card}><Text>Kart 5435</Text></View>
// //       <View style = {styles.card}><Text>Kart 54</Text></View>
// //       <View style = {styles.card}><Text>Kart 57</Text></View>
// //       <View style = {styles.card}><Text>Kart 59</Text></View>
// //       <View style = {styles.card}><Text>Kart 50</Text></View>
// //       <View style = {styles.card}><Text>Kart 52</Text></View>
// //       <View style = {styles.card}><Text>Kart 25</Text></View>
// //       <View style = {styles.card}><Text>Kart 25</Text></View>
// //       <View style = {styles.card}><Text>Kart 115</Text></View>
// //       <View style = {styles.card}><Text>Kart 1355</Text></View>
// //   </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   scrollContent: {
// //     padding: 16,
// //     paddingBottom: 30, // Listenin sonunda ekstra boşluk bırakıyoruz.
// //     backgroundColor: "#F5F7FA"
// //   },

// //   title: {
// //     fontSize: 20,
// //     fontWeight: "700",
// //     marginBottom: 12,
// //     color: "#202124"
// //   },

// //   card: {
// //     backgroundColor: "white",
// //     height: 70,
// //     borderRadius: 10,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginBottom: 10
// //   }
// // });


// // REUSABLE UI COMPONENTS
// // Kod tekrarını engellemek için modüler parçalar (StatCard, AppButton) oluşturulur.
// // Tıklama olayları için Pressable kullanılır ve onPress fonksiyonu prop olarak aktarılır.

// // import {Pressable, StyleSheet, Text, View} from "react-native";

// // interface StatCardProps{
// //   value: string;
// //   label: string;
// // }

// // function StatCard({value, label}: StatCardProps){
// //   return(
// //     <View style = {styles.statCard}>
// //       <Text style = {styles.statValue}>{value}</Text>
// //       <Text style = {styles.statLabel}>{label}</Text>
// //     </View>
// //   );
// // }

// // interface AppButtonProps {
// //   title: string;
// //   onPress: () => void;
// // }

// // function AppButton({title, onPress}: AppButtonProps){
// //   return(
// //     <Pressable style = {styles.button} onPress = {onPress}>
// //       <Text style = {styles.buttonText}>{title}</Text>
// //     </Pressable>
// //   );
// // }

// // export default function App() {
// //   return (
// //     <View style = {styles.container}>
// //       <View style = {styles.row}>
// //         <StatCard value = "12" label = "Project" />
// //         <StatCard value = "8" label = "Course" />
// //       </View>
// //       <AppButton title = "Save" onPress = {() => console.log("Pressed!")} />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 16,
// //     justifyContent: "center",
// //     backgroundColor: "#F5F7FA" 
// //   },

// //   row: {
// //     flexDirection: "row",
// //     marginBottom: 16
// //   },

// //   statCard: {
// //     flex: 1,
// //     backgroundColor: "#FFF",
// //     borderRadius: 10,
// //     padding: 12,
// //     alignItems: "center",
// //     marginHorizontal: 4
// //   },

// //   statValue: {
// //     fontSize: 18,
// //     fontWeight: "700",
// //     color: "#7B1E3A",
// //   },

// //   statLabel: {
// //     fontSize: 11,
// //     color: "#665"
// //   },

// //   button: {
// //     backgroundColor: "#7B1E3A",
// //     borderRadius: 10,
// //     paddingVertical: 12,
// //     alignItems: "center"
// //   },

// //   buttonText: {
// //     color: "#FFF",
// //     fontSize: 14,
// //     fontWeight: "600"
// //   }
// // });

// // ALIŞTIRMA ORTA
// // Ekrandan daha uzun bir içeriği ScrollView içinde gösteriniz. 
// // En az sekiz adet kart veya paragraf koyunuz.
// // İçeriğin alt kenarında boşluk kalması için contentContainerStyle 
// // içine paddingBottom ekleyiniz.

// // import {ScrollView, StyleSheet, Text, View} from "react-native";


// // export default function App(){
// //   return(
// //     <View style = {styles.container}>
// //       <ScrollView contentContainerStyle = {styles.scrollContent}>
// //       <View style = {styles.card}><Text>Kart 1</Text></View>
// //       <View style = {styles.card}><Text>Kart 2</Text></View>
// //       <View style = {styles.card}><Text>Kart 3</Text></View>
// //       <View style = {styles.card}><Text>Kart 4</Text></View>
// //       <View style = {styles.card}><Text>Kart 5</Text></View>
// //       <View style = {styles.card}><Text>Kart 6</Text></View>
// //       <View style = {styles.card}><Text>Kart 7</Text></View>
// //       <View style = {styles.card}><Text>Kart 8</Text></View>
// //       <View style = {styles.card}><Text>Kart 8</Text></View>
// //       <View style = {styles.card}><Text>Kart 8</Text></View>
// //       <View style = {styles.card}><Text>Kart 8</Text></View>
// //       <View style = {styles.card}><Text>Kart 8</Text></View>
// //       <View style = {styles.card}><Text>Kart 8</Text></View>
// //       <View style = {styles.card}><Text>Kart 8</Text></View>
// //       <View style = {styles.card}><Text>Kart 8</Text></View>
// //       <View style = {styles.card}><Text>Kart 8</Text></View>
// //       <View style = {styles.card}><Text>Kart 8</Text></View>
// //       <View style = {styles.card}><Text>Kart 8</Text></View>
// //     </ScrollView>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     marginTop: 40
// //   },
// //   scrollContent: {
// //     padding: 16,
// //     paddingBottom: 50,
// //     backgroundColor: "#234234"
// //   },

// //   card: {
// //     backgroundColor: "#D49922",
// //     borderColor: "rgba(0, 128, 255, 0.84)",
// //     borderWidth: 3,
// //     borderRadius: 10,
// //     height: 70,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     marginBottom: 10
// //   }
// // });

// // Alıştırma 3.7'de kaldın. Zor olan.

// // import {TextInput} from "react-native";

// // <TextInput
// //   placeholder = "Adınızı giriniz."
// // />

// // input: {
// //   borderWith: 1,
// //   borderColor: "#CCCCCC",
// //   borderRadius: 10,
// //   padding: 12,
// //   fontSize: 16
// // }

// // TextInput'a stil vermek önemlidir.

// // placeholder, alan boşken gösterilen soluk açıklama yazısıdır.
// {/* <TextInput
//   placeholder = "Entry your name."
// /> */}

// // value, input'un ekranda göstereceği değerdir. Bu değer koddan verilir.

// {/* <TextInput
//   value = {name}
// /> */}

// /// onChangeText, kullanıcı metni her değiştirdiğinde çağrılan function'dır ve yeni metni argüman olarak verir.
// // const [name, setName] = useState("");

// // <TextInput
// //   style = {styles.input}
// //   placeholder = "Adınızı giriniz."
// //   value = {name}
// //   onChangeText = {setName}
// // />

// // Ekranda görünen metin klavyeden gelmez. state'ten okunduğu için görünür.

// // Controlled input, ekranda gösterdiği değer React state tarafından
// // kontrol edilen giriş alanıdır.
// // Input'un kendine ait bir "hafızası" yoktur; ne göstereceğini her zaman state'ten okur.

// // const [name, setName] = useState("");

// // <TextInput
// //   value = {name}
// //   onChangeText = {setName}
// // />

// // interface Task{
// //   id: number;
// //   title: string;
// // }

// // const [tasks, setTasks] = useState<Task[]>([]);

// // const newTask: Task = {
// //   id: Date.now(),
// //   title: taskText.trim()
// // };

// // setTask([
// //   ...tasks,
// //   newTask
// // ]);

// // setTaskText("");

// // Silme işlemi filter() ile yapılır:
// // Olan şey id'si belirlenen task hariç diğer tüm kayıtlı task'lerin yeni bir array'e eklenmesidir.
// // const deleteTask = (id: number) => {
// //   setTask(
// //     tasks.filter(task => task.id !== id)
// //   );
// // };

// // Kısaca silmek, kalanları seçmektir.

// // interface Task {
// //   id: number;
// //   title: string;
// //   completed: boolean;
// // }

// // const toggleTask = (id: number) => {
// //   setTask(
// //     tasks.map(task =>
// //       task.id === id
// //         ? {
// //           ...task, // Bu satırı yazmak çok kritik.
// //           completed: !task.completed
// //         }

// //         : task
// //     )
// //   );
// // };

// // // CRUD : Create, Read, Update, Delete


// // // Kullanıcının yaptığı işlemi görebilmesi için en kısa yol Alert kullanmaktır.
// // // import {Alert} form "react-native";

// // // Alert.alert(
// // //   "Başarılı",
// // //   "Kayıt Eklendi."
// // // );

// // // Silinen veri geri gelmez. Bu sebeple emin olmak adına uygulamanın teyit etmesi tavsiye edilir.

// // import {Alert} from "react-native";
// // const confirmDelete = (id: number) => {
// //   Alert.alert(
// //     "Görevi sil",
// //     "Bu görevi silmek istediğinizden emin misiniz?",
// //     [
// //       {
// //         text: "İptal",
// //         style: "cancel"
// //       },
// //       {
// //         text: "Sil",
// //         onPress: () => deleteTask(id)
// //       }
// //     ]
// //   );
// // };

// // <AppButton
// //   title = "Kaydet"
// //   onPress = {saveData}
// // />

// // interface TaskItemProps {
// //   task: Task,
// //   onToggle: (id: number) => void;
// //   onDelete: (id: number) => void;
// // }



// ///////////////////////////////////////////////7
// ///////////////////////////////////////////////7
// ///////////////////////////////////////////////7
// ///////////////////////////////////////////////7
// ///////////////////////////////////////////////7
// // // Kullanıcı Kayıt Formu
// // import {useState} from "react";
// // import {Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
// // import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

// // interface AppButtonProps {
// //   title: string;
// //   onPress: () => void;
// // }

// // function AppButton({title, onPress}: AppButtonProps) {
// //   return(
// //     <Pressable style = {styles.button} onPress = {onPress}>
// //       <Text style = {styles.buttonText}>{title}</Text>
// //     </Pressable>
// //   );
// // }

// // function RegisterForm() {
// //   const [name, setName] = useState(" ");
// //   const [email, setEmail] = useState(" ");
// //   const [city, setCity] = useState(" ");
// //   const [error, setError] = useState(" ");

// //   const saveUser = () => {
// //     if(name.trim() === ""){
// //       setError("Ad soyad alanı boş bırakılamaz.");
// //       return;
// //     }
// //     if(email.trim() === ""){
// //       setError("E-posta alanı boş bırakılamaz.");
// //       return;
// //     }
// //     if(city.trim() === ""){
// //       setError("Şehir alanı boş bırakılamaz");
// //       return;
// //     }
// //     setError("");

// //     Alert.alert(
// //       "Başarılı",
// //       name.trim() + " kaydedildi."
// //     );

// //     setName("");
// //     setEmail("");
// //     setCity("");
// //   };

// //   return(
// //     <SafeAreaView
// //       style = {styles.safe}
// //       edges = {["top", "bottom"]}
// //     >
// //       <ScrollView contentContainerStyle = {styles.content}>
// //         <Text style = {styles.title}>
// //           Kullanıcı Kayıt Formu
// //         </Text>
        
// //         <Text style = {styles.label}>Ad soyad</Text>
// //         <TextInput
// //           style = {styles.input}
// //           placeholder = "Ad soyad"
// //           value = {name}
// //           onChangeText = {setName}
// //         />

// //         <Text style = {styles.label}>E-posta</Text>
// //         <TextInput
// //           style = {styles.input}
// //           placeholder = "örnek@gmail.com"
// //           keyboardType = "default"
// //           autoCapitalize = "none"
// //           value = {email}
// //           onChangeText = {setEmail}
// //         />

// //         <Text style = {styles.label}>Şehir</Text>
// //         <TextInput
// //           style = {styles.input}
// //           placeholder = "Örn. Şanlıurfa"
// //           value = {city}
// //           onChangeText = {setCity}
// //         />

// //         {error !== "" && (
// //           <Text style = {styles.error}>{error}</Text>
// //         )}

// //         <AppButton
// //           title = "Kaydet"
// //           onPress = {saveUser}
// //         />
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // }

// // export default function App(){
// //   return(
// //     <SafeAreaProvider>
// //       <RegisterForm />
// //     </SafeAreaProvider>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   safe: {
// //     flex: 1,
// //     backgroundColor: "#F5F7FA"
// //   },

// //   content: {
// //     padding: 20
// //   },

// //   title: {
// //     fontSize: 22,
// //     fontWeight: "700",
// //     color: "#202124",
// //     marginBottom: 20
// //   },

// //   label: {
// //     fontSize: 14,
// //     fontWeight: "600",
// //     color: "#444444",
// //     marginBottom: 6
// //   },

// //   input: {
// //     borderWidth: 1,
// //     borderColor: "#CCCCCC",
// //     borderRadius: 10,
// //     backgroundColor: "#FFFFFF",
// //     padding: 12,
// //     fontSize: 16,
// //     marginBottom: 14
// //   },

// //   error: {
// //     color: "#C62828",
// //     fontSize: 13,
// //     marginBottom: 10
// //   },

// //   button: {
// //     backgroundColor: "#7B1E3A",
// //     borderRadius: 12,
// //     paddingVertical: 14,
// //     alignItems: "center",
// //     marginTop: 6
// //   },

// //   buttonText: {
// //     color: "#FFFFFF",
// //     fontSize: 16,
// //     fontWeight: "600"
// //   }
// // });

// // Örnek 4.2 Mini Görev Yöneticisi

// // import {useState} from "react";
// // import {Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
// // import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

// // interface Task {
// //   id: number;
// //   title: string;
// //   completed: boolean;
// // }

// // interface TaskItemProps {
// //   task: Task;
// //   onToggle: (id: number) => void;
// //   onDelete: (id: number) => void;
// // }

// // function TaskItem({task, onToggle, onDelete}: TaskItemProps){
// //   return(
// //     <View style = {styles.taskRow}>
// //       <Pressable
// //         style = {styles.taskMain}
// //         onPress = {() => onToggle(task.id)}
// //       >
// //         <Text style = {styles.mark}>
// //           {task.completed ? "[x]" : "[ ]"}
// //         </Text>

// //         <Text
// //           style = {[
// //             styles.taskText,
// //             task.completed && styles.completedText
// //           ]}
// //         >
// //           {task.title}
// //         </Text>
// //       </Pressable>

// //       <Pressable
// //         style = {styles.deleteButton}
// //         onPress = {() => onDelete(task.id)}
// //       >
// //         <Text style = {styles.deleteText}>Sil</Text>
// //       </Pressable>
// //     </View> 
// //   );
// // }

// // function TaskScreen() {
// //   const [taskText, setTaskText] = useState("");
// //   const [tasks, setTasks] = useState<Task[]>([]);
// //   const [error, setError] = useState("");

// //   const addTask = () => {
// //     if(taskText.trim() === ""){
// //       setError("Görev adı boş bırakılamaz.");
// //       return;
// //     }

// //     const newTask: Task = {
// //       id: Date.now(),
// //       title: taskText.trim(),
// //       completed: false
// //     };

// //     setTasks([...tasks, newTask]);
// //     setTaskText("");
// //     setError("");
// //   };

// //   const toggleTask = (id: number) => {
// //     setTasks(
// //       tasks.map((task) =>
// //         task.id === id
// //           ? {
// //             ...task,
// //             completed: !task.completed
// //           }
// //           : task
// //     )
// //   );
// // };

// // const deleteTask = (id: number) => {
// //   setTasks(
// //     tasks.filter((task) => task.id !== id)
// //   );
// // };

// // const confirmDelete = (id: number) => {
// //   Alert.alert(
// //     "Görevi sil",
// //     "Bu görevi silmek istediğinize emin misin?",
// //     [
// //       {
// //         text: "iptal",
// //         style: "cancel"
// //       },
// //       {
// //         text: "sil",
// //         onPress: () => deleteTask(id)
// //       }
// //     ]
// //   );
// // };

// // const doneCount = tasks.filter(
// //   (task) => task.completed
// // ).length;

// // return (
// //   <SafeAreaView
// //     style = {styles.safe}
// //     edges = {["top", "bottom"]}
// //   >
// //     <ScrollView contentContainerStyle = {styles.content}>
// //       <Text style = {styles.title}>Görevlerim</Text>

// //       <View style = {styles.inputRow}>
// //         <TextInput
// //           placeholder = "Yeni görev..."
// //           value = {taskText}
// //           onChangeText = {setTaskText}
// //         />

// //         <Pressable
// //           style = {styles.addButton}
// //           onPress = {addTask}
// //         >
// //           <Text style = {styles.addButtonText}>
// //             Ekle
// //           </Text>
// //         </Pressable>
// //         </View>

// //         {error !== "" && (
// //           <Text style = {styles.error}>{error}</Text>
// //         )}

// //         {tasks.length === 0 ? (
// //           <Text style = {styles.emptyText}>
// //             Henüz görev eklenmedi.
// //           </Text>
// //         ) : (
// //           <Text style = {styles.counter}>
// //             {tasks.length} görev, {doneCount} tamamlandı.
// //           </Text>
// //         )}

// //         {tasks.map((task) => (
// //           <TaskItem
// //             key = {task.id}
// //             task = {task}
// //             onToggle = {toggleTask}
// //             onDelete = {confirmDelete}
// //           />
// //         ))}
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // }

// // export default function App(){
// //   return(
// //     <SafeAreaProvider>
// //       <TaskScreen />
// //     </SafeAreaProvider>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   safe: {
// //     flex: 1,
// //     backgroundColor: "#F5F7FA",
// //   },

// //   content: {
// //     padding: 20,
// //     paddingBottom: 40
// //   },

// //   title: {
// //     fontSize: 24,
// //     fontWeight: "700",
// //     color: "#202124",
// //     marginBottom: 16
// //   },

// //   inputRow: {
// //     flexDirection: "row",
// //     alignItems: "center"
// //   },

// //   input: {
// //     flex: 1,
// //     borderWidth: 1,
// //     borderColor: "#CCCCCC",
// //     borderRadius: 10,
// //     backgroundColor: "#FFFFFF",
// //     padding: 12,
// //     fontSize: 16
// //   },

// //   addButton: {
// //     backgroundColor: "#7B1E3A",
// //     paddingVertical: 13,
// //     paddingHorizontal: 18,
// //     marginLeft: 8
// //     borderRadius: 10,
// //   },

// //   addButtonText: {
//   //     fontSize: 15,
//   //     color: "#a09bff",
// //     fontWeight: "600"
// //   },

// //   error: {
// //     color: "#0e4b2a",
// //     marginTop: 8
// //     fontSize: 13,
// //   },
  
// //   counter: {
// //     fontSize: 13,
// //     color: "#666665",
// //     marginTop: 14,
// //     marginBottom: 10
// //   },

// //   emptyText: {
// //     textAlign: "center",
// //     color: "#213420",
// //     fontSize: 14,
// //     marginTop: 24
// //   },

// //   taskRow: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     backgroundColor: "#b84a4a",
// //     borderRadius: 13,
// //     padding: 13,
// //     marginBottom: 10
// //   },

// //   taskMain: {
// //     flex: 1,
// //     flexDirection: "row",
// //     alignItems: "center"
// //   },

// //   mark: {
// //     fontSize: 13,
// //     color: "#49be2c",
// //     marginRight: 12
// //   },
  
// //   taskText: {
// //     flex: 1,
// //     fontSize: 15,
// //     color: "#202124",
// //   },

// //   completedText: {
// //     textDecorationLine: "line-through",
// //     color: "#999999"
// //   },

// //   deleteButton: {
// //     backgroundColor: "#D3EC",
// //     borderRadius: 7,
// //     paddingVertical: 5,
// //     paddingHorizontal: 13,
// //     marginLeft: 9
// //   },

// //   deleteText: {
// //     color: "#234232",
// //     fontSize: 15,
// //     fontWeight: "600"
// //   }
// // });

// // To-do List'ten sonraki alıştırmada kaldın.



// // TO DO LIST ÖDEV.

// import {
//   ScrollView,
//   Text,
//   TextInput,
//   View,
//   Alert,
//   Pressable,
//   StyleSheet,
// } from "react-native";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import { useState } from "react";

// interface Task {
//   id: number;
//   title: string;
//   completed: boolean;
// }

// interface TaskItemProps {
//   task: Task;
//   onToggle: (id: number) => void;
//   onDelete: (id: number) => void;
// }

// function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
//   return (
//     <View style={styles.taskRow}>
//       <Pressable style={styles.taskMain} onPress={() => onToggle(task.id)}>
//         <Text style={styles.mark}>
//           {task.completed ? "[Done]" : "[Waiting...]"}
//         </Text>

//         <Text
//           style={[styles.taskText, task.completed && styles.completedText]}
//         >
//           {task.title}
//         </Text>
//       </Pressable>

//       <Pressable style={styles.deleteButton} onPress={() => onDelete(task.id)}>
//         <Text style={styles.deleteText}>Delete</Text>
//       </Pressable>
//     </View>
//   );
// }

// function TaskScreen() {
//   const [taskText, setTaskText] = useState("");
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [error, setError] = useState("");

//   const addTask = () => {
//     if (taskText.trim() === "") {
//       setError("The task field can't be empty!");
//       return;
//     }

//     const newTask: Task = {
//       id: Date.now(),
//       title: taskText.trim(),
//       completed: false,
//     };

//     setTasks([...tasks, newTask]);
//     setTaskText("");
//     setError("");
//   };

//   const toggleTask = (id: number) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const deleteTask = (id: number) => {
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const confirmDelete = (id: number) => {
//     Alert.alert("Delete task", "Are you sure you want to delete this task?", [
//       {
//         text: "Cancel",
//         style: "cancel",
//       },
//       {
//         text: "Delete",
//         onPress: () => deleteTask(id),
//       },
//     ]);
//   };

//   const doneCount = tasks.filter((task) => task.completed).length;

//   return (
//     <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
//       <ScrollView contentContainerStyle={styles.content}>
//         <Text style={styles.title}>My tasks</Text>

//         <View style={styles.inputRow}>
//           <TextInput
//             style={styles.input}
//             placeholder="New task..."
//             value={taskText}
//             onChangeText={setTaskText}
//           />

//           <Pressable style={styles.addButton} onPress={addTask}>
//             <Text style={styles.addButtonText}>Add</Text>
//           </Pressable>
//         </View>

//         {error !== "" && <Text style={styles.error}>{error}</Text>}

//         {tasks.length === 0 ? (
//           <Text style={styles.emptyText}>You haven't added any tasks yet.</Text>
//         ) : (
//           <Text style={styles.counter}>
//             {tasks.length} task(s), {doneCount} completed.
//           </Text>
//         )}

//         {tasks.map((task) => (
//           <TaskItem
//             key={task.id}
//             task={task}
//             onToggle={toggleTask}
//             onDelete={confirmDelete}
//           />
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <TaskScreen />
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   safe: {
//     flex: 1,
//     backgroundColor: "#F5F7FA",
//   },

//   content: {
//     padding: 20,
//     paddingBottom: 40,
//   },

//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#202124",
//     marginBottom: 16,
//   },

//   inputRow: {
//     flexDirection: "row",
//     alignItems: "center",
//   },

//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "#CCCCCC",
//     borderRadius: 10,
//     backgroundColor: "#FFFFFF",
//     padding: 12,
//     fontSize: 16,
//   },

//   addButton: {
//     backgroundColor: "#2563EB",
//     borderRadius: 10,
//     paddingHorizontal: 18,
//     marginLeft: 8,
//     paddingVertical: 13,
//   },

//   addButtonText: {
//     fontSize: 15,
//     color: "#FFFFFF",
//     fontWeight: "600",
//   },

//   error: {
//     color: "#D32F2F",
//     marginTop: 8,
//     fontSize: 13,
//   },

//   counter: {
//     fontSize: 13,
//     color: "#666434",
//     marginTop: 14,
//     marginBottom: 10,
//   },

//   emptyText: {
//     textAlign: "center",
//     color: "#212333",
//     fontSize: 14,
//     marginTop: 24,
//   },

//   taskRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#FFFFFF",
//     borderRadius: 13,
//     padding: 13,
//     marginBottom: 10,
//   },

//   taskMain: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//   },

//   mark: {
//     fontSize: 13,
//     color: "#49BE2C",
//     marginRight: 12,
//   },

//   taskText: {
//     flex: 1,
//     fontSize: 15,
//     color: "#202124",
//   },

//   completedText: {
//     textDecorationLine: "line-through",
//     color: "#999999",
//   },

//   deleteButton: {
//     backgroundColor: "#FDE2E2",
//     borderRadius: 7,
//     paddingVertical: 5,
//     paddingHorizontal: 13,
//     marginLeft: 9,
//   },

//   deleteText: {
//     color: "#B42318",
//     fontSize: 15,
//     fontWeight: "600",
//   },
// });






//////////////////////////////////////////////////////7
// Ders Uygulaması //
// Ödevi bitir.

// // import {StyleSheet, Text, View, FlatList, Pressable} from "react-native";

// // interface Task {
// //   id: number;
// //   title: string;
// //   course: string;
// //   completed: boolean;
// // }

// // interface TaskCardProps {
// //   task : Task;
// // }

// // // // export default function App(){
// // // //   return(
// // // //     <View style = {styles.container}>
// // // //       <Text> Deneme Yazısı!</Text>
// // // //     </View>
// // //   );
// // // }


// export default function App(){
//   return(
//     TaskCard
//   )
// }
// function TaskCard({task} : TaskCardProps) {
  
//   return (
//     <View style = {styles.container}>
//       <View style = {styles.taskBox}>

//         <Text style = {styles.title}>Çalışma Görevlerim</Text>
        
//       <Pressable style = {styles.completeTask} onPress = {completeTask}>
//         <Text style = {styles.completeTask}>Tamamla</Text>
//       </Pressable>



//     </View>
//       </View>
//   )
// }

// function completeTask(){
//   console.log("Try");
// }

// const tasks : Task[] = [
//   {id: 1, title: "Mobil Uygulama", course: "React Native tekrar et.", completed: false},
//   {id: 2, title: "Matematik", course: "Lineer Cebir soruları çöz.", completed: false},
//   {id: 3, title: "Veri Tabanı", course: "Veri Tabanı ödevini yap.", completed: false},
//   {id: 4, title: "Özel Öğretim Yöntemleri", course: "Sunum hazırla.", completed: false}
// ];

// // const renderTask = ({
// //   item
// // }: {
// //   item = Task;
// // }) => (
// //   <TaskCard task = {item} />
// // );

// // return (
// //   <FlatList
// //     data = {tasks}
// //     renderItem={}
// // )


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   title: {
//     fontWeight: "bold",
//     fontSize: 13,
//     color: "black",
//   },
//   taskBox: {
//     height: 15,
//     width: 150,
//     backgroundColor: "blue",
//     borderRadius: 13
//   },
//   completeTask: {
//     height: 10,
//     width: 50,
//     borderRadius: 15,
//     color: "yellow"
//   }

// })

// VİZE ÖNCESİ

// Veri parent'tan geliyorsa = props
// Bu veri zamanla değişecek ve ekranı güncelleyecekse = useState
// Bu veri array ise = map/filter/find
// Bu veri tek object ise = nokta ile alan
// Her elemanı dönüştürüyor muyum = map()
// Birden fazla elemanı seçiyor/eliyor muyum = filter()
// Tek bir eleman mı arıyorum = find()
// Kullanıcıdan metin mi alıyorum = TextInput + value + onChangeText
// Uzun, veri tabanlı bir liste mi gösteriyorum = FlatList
// Başka ekrana mı gideceğim = router.push / Link
// Hangi kaydın açıldığını mı taşıyorum = [id].tsx + params
// İnternetten veri mi bekliyorum = async / await + fetch
// Ekran açılınca bir kez mi çalışmalı = useEffect(() => {...}, [])

// let ile tanımlanan değişkene yeniden değer atanabilir.
// === hem değeri hem tipi karşılaştırılır.

// Object = Birbirleriyle ilgili verileri anahtar : değer çiftleri olarak bir arada tutar.
// Örnek

// const student = {
//   id: 1,
//   name: "Ayşe",
//   department: "Bilgisayar"
// };

// Array = sırali bir değer listesidir. Mobil uygulamalarda listeler hep object array'i olarak tutulur.
// İndeks 0'dan başlar. length - 1 = son elemanın indeksi.

// map() her elemanı dönüştürür. Sonuç aynı uzunluktaki yeni array'dir.
// filter() koşulu true olan elemanları seçer; sonuç yeni array'dir. Hiçbiri uymazsa [] döner.
// find() koşulu sağlayan ilk elemanı döndürür; sonuç tek elemandır. Hiçbiri uymazsa undefined döndürür.

// Spread operator(...) bir array'in elemanlarını ya da bir object'in alanlarını yeni bir array/object'in içine açar.
// Destructuring, array veya object'ten değerleri tek satırda variable'lara çıkarmaktır. 

// const oldTasks = [
//   {id: 1, title: "Ders"}
// ];

// const newTask = {
//   id: 2,
//   title: "Ödev"
// };

// const tasks = [
//   ...oldTasks,
//   newTask // oldTask'in sonuna newTask eklenir ve bu yeni bir array olur (tasks array'i). oldTask array'ine bir şey olmaz.
// ];

// const student = {name: "Ali", grade: 2};
// const updated = {...student, grade: 3};

// const {name, grade} = student;
// const [first, second] = [10, 20];

// koşul ? A : B ifadesi koşul sağlanırsa A'yı döndürür sağlanmazsa B'yi döndürür.

// Interface = bir object'in şeklini(hangi alanlara ve hangi tiplere sahip olacağını) tanımlar.
// Interface bir değer üretmez; yalnızca kontrol kuralıdır.
// PascalCase geçerlidir.
// city?: string; = isteğe bağlı alan demektir. Doldurulmasa bile hata alınmaz. (Optional property)

// Component = UI'ın kendi başına anlamlı, yeniden kullanılabilir bir parçasıdır.
// ReactNative'de component bir function'dır ve JSX döndürür. Ekran, component'lerin iç içe girdiği bir component tree'dir.
// Component'ler PascalCase'dir.
// JSX döndürür.

// Props = Parent component'ten child component'e gönderilen verilerdir.
// Component'i bir function gibi düşünürsek props onun parametreleridir.
// Aynı StudentCard farklı props ile farklı öğrencileri gösterir reusable component'in anahtarı budur.
// Props'un tipi bir props interface'i ile tanımlanır.
// Props tek yönlüdür.
// Child, aldığı props'u değiştirmez (read-only).

// interface StudentCardProps {
//   name: string;
//   department: string;
// }

// function StudentCard({ name, department }: StudentCardProps) {
//   return (
//     <View>
//       <Text>{name}</Text>
//       <Text>{department}</Text>
//     </View>
//   );
// }

// <StudentCard
//   name = "Ayşe"
//   department = "Bilgisayar"
// />


// STATE

// State, component'in kendi yönettiği ve zamanla değişebilen verisidir. State değiştiğinde React component'i yeniden çalıştırır (re-render) ve ekran güncellenir. State useState hook'u ile oluşturulur. 
// Kısaca hook: "React, bunu benim için hatırla/yönet" deme yoludur.

// const [count, setCount] = useState(0);
// count : anlık değer, setCount : değişince alacağı değer.
// useState(0) sadece ilk render'da kullanılır. Başlangıç değeri demektir.

// import {useState} from "react";
// import {Pressable, Text, View} from "react-native";

// export default function Counter() {
//   const [count, setCount] = useState(0); // ilk render için useState(0) diyoruz.
//   return (
//     <View>
//       <Text>Sayaç: {count}</Text>

//       <Pressable onPress = {() => setCount(count + 1)}>
//         <Text>Artır</Text>
//       </Pressable>

//       <Pressable onPress = {() => setCount(0)}>
//         <Text>Sıfırla</Text>
//       </Pressable>
//     </View>
//   );
// }

// koşul ? A : B iki seçenekten birini gösterir.(True = A, False = B)
// koşul && A koşul doğruysa A'yı gösterir, değilse hiçbir şey göstermez.
// Örnek:
// {girisYapti && <Text> 3 yeni bildirimin var.</Text>}

// padding = içerik ile kenar arası
// border = kenar çizgisi
// margin = kutunun dışındaki, komşulara olan boşluk

// React Native'de layout FlexBox ile kurulur. Bir container'ın çocuklarının nasıl dizileceğini dört property belirler.
// flexDirection = hangi yöne dizilsin, justifyContent = (main axis üzerinde nasıl dağılsın)
// alignItems = (cross axis üzerinde nasıl hizalansın), flex = boş alanı ne oranda paylaşsın
//  ReactNative'de varsayılan flexDirection : "column" dur.
// Main axis = flexDirection yönü. Cross axis = Main axis'e dik olan yön.
// justifyContent = main axis, alignItems = cross axis

// Hafta 2 Uygulaması
// import {Text, View, Pressable, StyleSheet, ScrollView} from "react-native";
// import {useState} from "react";

// interface Student {
//   id: number;
//   name: string;
//   department: string;
//   grade: number;
//   city: string
// }

// interface StudentCardProps {
//   name: string;
//   department: string;
//   grade: number;
//   city: string
// }

// // component'ler function'dır unutma.
// function StudentCard({name, department, grade, city} : StudentCardProps) {
//   // Her kartın kendi state'i var.
//   const [detaylar, setDetaylar] = useState(false);

//   function detayGoster() {
//     setDetaylar(!detaylar);
//   }

//   return (
//     <View style = {styles.card}>
//       <Text style = {styles.name}>{name}</Text>
//       <Text style = {styles.text}>{department}</Text>

//       {detaylar && (
//         <View style = {styles.details}>
//           <Text style = {styles.text}>Sınıf: {grade}</Text>
//           <Text style = {styles.text}>Şehir: {city}</Text>
//         </View>
//       )}

//       <Pressable style = {styles.button} onPress = {detayGoster}>
//         <Text style = {styles.buttonText}>
//           {detaylar ? "Detay gizle" : "Detay göster"}
//         </Text>
//       </Pressable>
//     </View>
//   );
// }

// const students: Student[] = [
//   {id: 1, name: "İbrahim", department: "Bilgisayar", grade: 3, city: "Şanlıurfa"},
//   {id: 2, name: "Harun", department: "Bilgisayar", grade: 3, city: "Kilis"},
//   {id: 3, name: "Faruk", department: "Bilgisayar", grade: 2, city: "İstanbul"},
//   {id: 4, name: "Elif", department: "ELT", grade: 3, city: "Malatya"},
//   {id: 5, name: "Sinem", department: "Yazılım", grade: 3, city: "Malatya"}
// ]

// export default function App() {
//   return (
//     <ScrollView style = {styles.container}>
//       {students.map((student) => (
//         <StudentCard
//           key = {student.id}
//           name = {student.name}
//           department = {student.department}
//           grade = {student.grade}
//           city = {student.city}
//         />
//       ))}
//     </ScrollView>
//   );
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F2F2F2",
//     padding: 20,
//     paddingTop: 60
//   },

//   card: {
//     backgroundColor: "#FFF",
//     padding: 16,
//     marginBottom: 12,
//     borderRadius: 12
//   },

//   name: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "black"
//   },

//   text: {
//     fontSize: 16,
//     color: "black"
//   },

//   details: {
//     marginTop: 8
//   },

//   button: {
//     marginTop: 12,
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 8,
//     alignSelf: "flex-start",
//     backgroundColor: "rgba(120,255,120,0.52)",
//     borderWidth: 2,
//     borderColor: "rgba(92,9,9,0.91)"
//   },

//   buttonText: {
//     fontSize: 16,
//     color: "black"
//   }
// });

// Hafta 3 Uygulaması

// import {Image, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
// import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

// interface StatCardProps {
//   value: string;
//   label: string;
// }

// function StatCard({value, label} : StatCardProps) {
//   return (
//     <View style = {styles.statCard}>
//       <Text style = {styles.statValue}>{value}</Text>
//       <Text style = {styles.statLabel}>{label}</Text>
//     </View>
//   );
// }

// interface BadgeProps {
//   label: string;
// }

// function Badge ({label} : BadgeProps) {
//   return (
//     <View style = {styles.badge}>
//       <Text style = {styles.badgeText}>{label}</Text>
//     </View>
//   );
// }

// interface AppButtonProps {
//   title: string;
//   onPress: () => void;
// }

// function AppButton({title, onPress}: AppButtonProps) {
//   return (
//     <Pressable style = {styles.button} onPress = {onPress}>
//       <Text style = {styles.buttonText}>{title}</Text>
//     </Pressable>
//   );
// }

// const interests: string[] = [
//   "Yapay zekâ",
//   "Mobil",
//   "Veri Bilimi"
// ];

// function ProfileScreen() {
//   return (
//     <SafeAreaView style = {styles.safe} edges = {["top", "bottom"]}>
//       <ScrollView contentContainerStyle = {styles.content}>

//         <View style = {styles.header}>
//           <Image style = {styles.avatar}
//             source = {require("./assets/Ben.jpg")}
//           />
//           <Text style = {styles.name}>İbrahim Halil Yıldırım</Text>
//           <Text style = {styles.department}>Bilgisayar Mühendisliği</Text>
//         </View>

//         <View style = {styles.stats}>
//           <StatCard value = "3" label = "Sınıf" />
//           <StatCard value = "12" label = "Proje" />
//           <StatCard value = "8" label = "Ders" />
//         </View>

//         <Text style = {styles.sectionTitle}>Hakkımda</Text>
//         <Text style = {styles.paragraph}>
//           Mobil uyglama geliştirme ve yapay zekâ alanlarında çalışıyorum. React Native ile arayüz tasarlıyorum.
//         </Text>

//         <Text style = {styles.sectionTitle}>İlgi Alanları</Text>
//         <View style = {styles.badges}>
//           {interests.map((item) => (
//             <Badge key = {item} label = {item} />
//           ))}
//         </View>

//         <AppButton title = "Profili Düzenle"
//         onPress = {() => console.log("Profil Düzenleniyor.")}
//         />

//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <ProfileScreen />
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create ({
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
//     backgroundColor: "#E3E7ED"
//   },

//   name: {
//     fontSize: 24,
//     fontWeight: "700",
//     color: "#202124"
//   },

//   department: {
//     fontSize: 14,
//     color: "#666666",
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
//     color: "#666666",
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
//     marginBottom: 20
//   },

//   badges: {
//     flexDirection: "row",
//     flexWrap: "wrap", // Sığmayan elemanlar alt satıra geçer. Taşma engellenir. 
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
//     backgroundColor: "7B1E3A",
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

// Hafta 4 Uygulama
// Kullanıcı Kayıt Formu

// import { useState } from "react";
// import {Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
// import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

// interface AppButtonProps {
//   title: string;
//   onPress: () => void;
// }

// function AppButton({title, onPress} : AppButtonProps) {
//   return (
//     <Pressable style = {styles.button} onPress = {onPress}>
//       <Text style = {styles.buttonText}>{title}</Text>
//     </Pressable>
//   );
// }

// function RegisterForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [city, setCity] = useState("");
//   const [error, setError] = useState("");

//   const saveUser = () => {
//     if(name.trim() === "") {
//       setError("Ad soyad alanı boş bırakılamaz.")
//       return;
//     }
//     if(email.trim() === "") {
//       setError("E-posta alanı boş bırakılamaz.")
//       return;
//     }
//     if(city.trim() === "") {
//       setError("Şehir alanı boş bırakılamaz.")
//       return;
//     }

//     setError("");

//     Alert.alert("Başarılı", name.trim() + " kaydedildi");

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

//         <Text style = {styles.title}>Kullanıcı Kayıt Formu</Text>

//         <Text style = {styles.label}>Ad Soyad</Text>
//         <TextInput style = {styles.input} placeholder = "Örn: Fatih Talu" value = {name} onChangeText = {setName}
//         />

//         <Text style = {styles.label}>E-posta</Text>
//         <TextInput style = {styles.input} placeholder = "ornek@gmail.com" keyboardType = "email-address" autoCapitalize= "none" value = {email} onChangeText = {setEmail}
//         />

//         <Text style = {styles.label}>Şehir</Text>
//         <TextInput style = {styles.input} placeholder = "Örn: İstanbul" value = {city} onChangeText = {setCity}
//         />

//         {error !== "" && (
//           <Text style = {styles.error}>{error}</Text>
//         )}

//         <AppButton title = "Kaydet" onPress = {saveUser} />

//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <RegisterForm />
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
// safe: {
// flex: 1,
// backgroundColor: '#F5F7FA'
// },

// content: {
// padding: 20
// },

// title: {
// fontSize: 22,
// fontWeight: '700',
// color: '#202124',
// marginBottom: 20
// },

// label: {
// fontSize: 14,
// fontWeight: '600',
// color: '#444444',
// marginBottom: 6
// },

// input: {
// borderWidth: 1,
// borderColor: '#CCCCCC',
// borderRadius: 10,
// backgroundColor: '#FFFFFF',
// padding: 12,
// fontSize: 16,
// marginBottom: 14
// },

// error: {
// color: '#C62828',
// fontSize: 13,
// marginBottom: 10
// },

// button: {
// backgroundColor: '#7B1E3A',
// borderRadius: 12,
// paddingVertical: 14,
// alignItems: 'center',
// marginTop: 6
// },

// buttonText: {
// color: '#FFFFFF',
// fontSize: 16,
// fontWeight: '600'
// }
// });

// Hafta 5 Uygulama
// Ürün kataloğu

// import { useState } from "react";
// import {FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
// import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

// interface Product {
//   id: number;
//   name: string;
//   category: string;
//   price: number;
//   image: string;
// }

// const LOGO = "https://reactnative.dev/img/tiny_logo.png";

// const products: Product[] = [
//   { id: 1, name: "Laptop", category: "Elektronik", price: 45000, image: LOGO},
//   { id: 2, name: "Kablosuz Kulaklık", category: "Elektronik", price: 1200, image: LOGO},
//   { id: 3, name: 'Akıllı Saat',category: 'Elektronik',price: 3500, image: LOGO },
//   { id: 4, name: 'TypeScript Kitabı', category: 'Kitap',price: 750, image: LOGO },
//   { id: 5, name: 'Temiz Kod',category: 'Kitap',price: 450, image: LOGO },
//   { id: 6, name: 'Veri Yapıları',category: 'Kitap', price: 620, image: LOGO },
//   { id: 7, name: 'Pamuklu Tişört',category: 'Giyim',price: 350, image: LOGO },
//   { id: 8, name: 'Spor Ayakkabı',category: 'Giyim',price: 2100, image: LOGO },
//   { id: 9, name: 'Masa Lambası',category: 'Ev',price: 480, image: LOGO },
//   { id: 10, name: 'Kahve Makinesi',category: 'Ev',price: 2750, image: LOGO }
// ];

// const categories: string[] = [
//   "Tümü",
//   "Elektronik",
//   "Kitap",
//   "Giyim",
//   "Ev"
// ];

// interface ProductCardProps {
//   product: Product;
// }

// function ProductCard({product} : ProductCardProps) {
//   return (
//     <View style = {styles.card}>
//       <Image style = {styles.thumb} source = {{ uri: product.image}}
//       />
//       <View style = {styles.cardInfo}>
//         <Text style = {styles.name}>{product.name}</Text>
//         <Text style = {styles.category}>{product.category}</Text>
//         <Text style = {styles.price}>{product.price} TL</Text>
//       </View>
//     </View>
//   );
// }

// interface CategoryButtonProps {
//   title: string;
//   selected: boolean;
//   onPress: () => void;
// }

// function CategoryButton({title, selected, onPress} : CategoryButtonProps) {

//   return (      //      ----- ilk eleman ----- / -------------- ikinci eleman ------------ 
//     <Pressable style = {[styles.categoryButton, selected && styles.selectedCategoryButton]} // style dizisi
//     // Üstteki satırda ilk eleman HER DURUMDA aktiftir. selected ve sonrası ikinci elemandır ve selected TRUE ise görünür. Ama bu demek değildir ki ilk eleman görünmeyi bırakır;
//     // ilk eleman her vakit görünür ancak selected TRUE olursa ikisi birlikte görünür. Yeni görünüm birleştirilir.
//     onPress = {onPress} >
//       <Text style = {[styles.categoryText, selected && styles.selectedCategoryText]}
//       >{title}</Text>
//     </Pressable>
//   );
// }

// const Separator = () => (
//   <View style = {styles.separator} />
// );

// function CatalogScreen() {
//   const [searchText, setSearchText] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("Tümü"); // Varsayılan

//   const query = searchText.trim().toLowerCase();

//   const filteredProducts = products.filter((product) => {
//     const matchesSearch = product.name.toLowerCase().includes(query);

//     const matchesCategory = selectedCategory === "Tümü" || product.category === selectedCategory;

//     return ( matchesSearch && matchesCategory);
//   });

//   const clearFilters = () => {
//     setSearchText("");
//     setSelectedCategory("Tümü");
//   };

//   const renderProduct = ({item} : {item: Product;}) => <ProductCard product = {item} />;

//   return (
//     <SafeAreaView
//       style = {styles.safe} edges = {["top", "bottom"]}
//     >
//       <View style = {styles.content}>
//         <Text style = {styles.title}>
//           Ürünler
//         </Text>

//         <TextInput style = {styles.input} placeholder="Ürün ara..." value = {searchText} onChangeText = {setSearchText}
//         />

//         <ScrollView horizontal showsHorizontalScrollIndicator = {false} style = {styles.categoryRow} contentContainerStyle = {styles.categoryContent}
//         >
//           {categories.map((category) => (
//             <CategoryButton
//             key = {category}
//             title = {category}
//             selected = {
//               category === selectedCategory
//             }
//             onPress={() =>
//               setSelectedCategory(category)
//             }
//           />
//           ))}
//         </ScrollView>

//         <View style = {styles.resultRow}>
//           <Text style = {styles.resultText}>{filteredProducts.length} ürün bulundu </Text>
//           <Pressable onPress = {clearFilters}>
//             <Text style = {styles.clearText}>
//               Filtreleri temizle
//             </Text>
//           </Pressable> 
//         </View>

//         <FlatList
//           data = {filteredProducts}
//           renderItem = {renderProduct}
//           keyExtractor = {(item) => item.id.toString()}
//           ItemSeparatorComponent = {Separator}
//           showsVerticalScrollIndicator = {false}
//           contentContainerStyle = {styles.listContent}
//           ListEmptyComponent = {
//             <View style = {styles.emptyBox}>
//               <Text style = {styles.emptyTitle}>
//                 Aramanıza uygun ürün bulunamadı.
//               </Text>
//               <Text style = {styles.emptyHint}>
//                 Arama ifadesini kısaltmayı veya kategoriyi değiştirmeyi deneyiniz.
//               </Text>
//             </View>
//           }
//         />
//       </View>
//     </SafeAreaView>
//   );
// }

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <CatalogScreen />
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
// safe: {
// flex: 1,
// backgroundColor: '#F5F7FA'
// },
// content: {
// flex: 1,
// paddingHorizontal: 20,
// paddingTop: 8
// },
// title: {
// fontSize: 24,
// fontWeight: '700',
// color: '#202124',
// marginBottom: 14
// },
// input: {
// borderWidth: 1,
// borderColor: '#CCCCCC',
// borderRadius: 10,
// backgroundColor: '#FFFFFF',
// padding: 12,
// fontSize: 16,
// marginBottom: 12
// },
// categoryRow: {
// flexGrow: 0,
// marginBottom: 12
// },
// categoryContent: {
// paddingRight: 8
// },
// categoryButton: {
// backgroundColor: '#EEF1F5',
// borderRadius: 20,
// paddingVertical: 8,
// paddingHorizontal: 16,
// marginRight: 8,
// },
// selectedCategoryButton: {
// backgroundColor: '#7B1E3A'
// },
// categoryText: {
// fontSize: 14,
// color: '#333333'
// },
// selectedCategoryText: {
// color: '#FFFFFF',
// fontWeight: '600',
// marginBottom: 10,
// },
// resultRow: {
// flexDirection: 'row',
// justifyContent: 'space-between',
// alignItems: 'center',
// marginBottom: 10
// },
// resultText: {
// fontSize: 13,
// color: '#666666'
// },
// clearText: {
// fontSize: 13,
// fontWeight: '600',
// color: '#7B1E3A'
// },
// listContent: {
// paddingBottom: 24
// },
// separator: {
// height: 12
// },
// card: {
// flexDirection: 'row',
// alignItems: 'center',
// backgroundColor: '#FFFFFF',
// borderRadius: 12,
// padding: 12
// },
// thumb: {
// width: 56,
// height: 56,
// borderRadius: 10,
// backgroundColor: '#EEF1F5',
// },
// cardInfo: {
// flex: 1,
// marginLeft: 12
// },
// name: {
// fontSize: 16,
// fontWeight: '600',
// color: '#202124'
// },
// category: {
// fontSize: 13,
// color: '#888888',
// marginTop: 2
// },
// price: {
// fontSize: 15,
// fontWeight: '700',
// color: '#7B1E3A',
// marginTop: 4
// },
// emptyBox: {
// paddingTop: 40,
// paddingHorizontal: 20
// },
// emptyTitle: {
// textAlign: 'center',
// fontSize: 15,
// fontWeight: '600',
// color: '#666666'
// },
// emptyHint: {
// textAlign: 'center',
// fontSize: 13,
// color: '#999999',
// marginTop: 6
// }
// });


// Vize

// Verinin şekli ne?
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   inStock: boolean;
//   description?: string; // Optional
// }


// // Değişen veri nerede tutulacak?
// import { useState } from "react";

// const [count, setCount] = useState(0);
// const [name, setName] = useState("");
// const [items, setItems] = useState<Product[]>([]);
// const [error, setError] = useState<string | null>(null);

// Component dışarından ne alacak?

// interface ProductCardProps {
//   product: Product;
//   onPress : () => void;
// }

// Tekrarlanan görünüm

// function ProductCard({product, onPress} : ProductCardProps) {
//   return (
//     <Pressable style = {styles.card} onPress = {onPress}>
//       <Text style = {styles.name}>{product.name}</Text>
//       <Text style = {styles.price}>{product.price} TL</Text>
//     </Pressable>
//   );
// }

// Kullanıcından metin almak

// const [taskText, setTaskText] = useState("");

// <TextInput
//   value = {taskText}
//   onChangeText = {setTaskText}
//   placeholder = "Görev yazınınız"
// />

// Array'e kayıt ekleme

// const addTask = () => {
//   if(taskText.trim() == ""){
//     setError("görev alanı boş olamaz!")
//     return;
//   }
//   const newTask: Task = {id: Date.now(), title: taskText.trim(), completed: false};
//   setTasks([...tasks, newTask]);
//   setTaskText("");
//   setError("");
// };

// filter ile silme

// const deleteTask = (id: number) => {
//   setTask(tasks.filter(task => task.id !== id));
// }; // tasks array'ini set'liyoruz. girilen id hariç geri kalanını alıyoruz.

// map ile güncelleme

// const toggleTask = (id: number) => {
//   setTasks(
//     tasks.map(task => 
//       task.id === id ? {...task, completed: !task.completed} : task
//     )
//   );
// };

// FlatList  data +  renderItem + keyExtractor

// <FlatList
//   data = {products}
//   keyExtractor = {{item} => item.id.toString()}
//   renderItem = {({ item }) => <ProductCard product = {item} onPress = {() => goToDetail(item)} />}
//   ListEmptyComponent = {<Text>Sonuç bulunamadı.</Text>}

// Büyük-küçük harf duyarsız arama

// const filteredProducts = products.filter(product =>
//   product.name.toLowerCase().includes(searchText.trim().toLowerCase())
// );

// Arama && kategori

// const filteredProducts = products.filter(product => {
//   const matchesSearch = product.name.toLowerCase().includes(searchText.trim().toLowerCase());
//   const matchesCategory = selectedCategory === "Tümü" || product.category === selectedCategory;
//   return matchesSearch && matchesCategory;
// })

// import { useRouter } from "expo-router";

// const router = useRouter();

// router.push("/products"); // sabit route

// router.push({           // dinamik route
//   pathname: "/product/[id]",
//     params: {id: product.id} // params, bir ekrandan diğerine gönderdiğin bilgilerdir. Ekrana "seni açıyorum, bu bilgiyi de yanında götür" demenin yolu.
// });

// router.back(); // geri dön

// Route parametresini oku

// import { useLocalSearchParams } from "expo-router";
// const { id } = useLocalSearchParams<{ id: string}>();

// // Tek kaydı bul, yoksa kontrol et
// const product = products.find(item => item.id === Number(id));

// if(!product) {
//   return <Text>Ürün bulunamadı.</Text>
// }

// const loadProducts = async () => {
//   // içinde await kullanılabilir
// };


// // fetch GET isteği
// const response = await fetch(API_URL);


// // response.ok HTTP başarılı mı?
// if(!response.ok) {
//   throw new Error("HTTP ${response.status}";
// }

// // JSON -> JavaScript
// const data = await Response.json();
// setProducts(data);  // Yanıt düz array ise

// try {
//   setLoading(true);
//   setError(null);
//   // fetch + ok kontrolü + json + setState
// } catch (e) {
//   setError("Veriler alınamadı.");
// } finally { // hata olsun olmasın çalışır.
//   setLoading(false);
// }

// useEffect // Ekran açılınca bir kez çalıştır.

// import { useEffect } from "react";

// useEffect(() => {
//   loadProducts();
// } []);

// JSON taşınan metin. Anahtarlar çift tırnaklı.

// const products = [
  // {id: 1, name: urun1, price: 100},
  // {id: 2, name: urun2, price: 500},
  // {id: 3, name: urun3, price: 499},
  // {id: 4, name: urun4, price: 1000}
// ]

// const product = products.find(p => p.id === 3);
// if(product){
  // console.log(product.name);
// }
// const products: Product[] = [

// const ucuzUrunler = products.filter(p => p.price <500).map(p => p.name);



