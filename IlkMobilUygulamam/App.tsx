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