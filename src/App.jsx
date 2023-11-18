import "./App.css";
import React from "react";

function Arama({aramaMetni,onSearch}){

  return(
    <div>
    <label htmlFor="arama">Ara: </label>
    <input id="arama" type="text" onChange={onSearch} value={aramaMetni}/>
    <p>
    </p>
    </div>
  )
}

function Yazi({id,url,baslik,yazar,yorum_sayisi,puan}){
  return(
    <li key={id}>
          <span>
            <a href={url}>{baslik}</a>, 
          </span>
          <span><b>Yazar:</b> {yazar}, </span>
          <span><b>Yorum Sayısı:</b> {yorum_sayisi}, </span>
          <span><b>Puan:</b> {puan}</span>
    </li>
  )
}

function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function(yazi){
        return(
          <Yazi key={yazi.id} {...yazi}/>
        );
        })}
    </ul>
  )
}

function App() {

  const [aramaMetni,setAramaMetni]=React.useState(localStorage.getItem("aranan") || "React");

  const yaziListesi = [
  {
    baslik: "React Öğreniyorum",
    url: "www.sdu.edu.tr",
    yazar: "Esra Özkutlu",
    yorum_sayisi: 3,
    puan: 4,
    id: 0,
  },
  {
    baslik: "Web Teknolojileri ve Programlama",
    url: "wwww.google.com.tr",
    yazar: "Ali Sevda",
    yorum_sayisi: 2,
    puan: 5,
    id: 1,
  },
  {
    "baslik": "JavaScript Temelleri",
    "url": "www.w3schools.com",
    "yazar": "Ayşe Yılmaz",
    "yorum_sayisi": 5,
    "puan": 4.5,
    "id": 2
  },
  {
    "baslik": "Python Programlamaya Giriş",
    "url": "www.python.org",
    "yazar": "Yılmaz Kor",
    "yorum_sayisi": 7,
    "puan": 4.8,
    "id": 3
  },
  {
    "baslik": "Mobil Uygulama Geliştirme",
    "url": "www.udacity.com",
    "yazar": "Zeynep Kaya",
    "yorum_sayisi": 10,
    "puan": 4.9,
    "id": 4
  },
  {
    "baslik": "Veri Bilimi ve Analitiği",
    "url": "www.analyticsvidhya.com",
    "yazar": "Özgür Akgün",
    "yorum_sayisi": 6,
    "puan": 4.7,
    "id": 5
  },
  {
    "baslik": "UI/UX Tasarımı",
    "url": "www.dribbble.com",
    "yazar": "Cemre Selin",
    "yorum_sayisi": 8,
    "puan": 4.6,
    "id": 6
  },
  {
    "baslik": "Java İleri Seviye Konular",
    "url": "www.oracle.com",
    "yazar": "Ali Çakır",
    "yorum_sayisi": 4,
    "puan": 4.2,
    "id": 7
  },
  {
    "baslik": "Veritabanı Yönetimi",
    "url": "www.mysql.com",
    "yazar": "Fatma Şehirli",
    "yorum_sayisi": 9,
    "puan": 4.8,
    "id": 8
  },
  {
    "baslik": "Artificial Intelligence Fundamentals",
    "url": "www.coursera.org",
    "yazar": "Kaan Demirtaş",
    "yorum_sayisi": 5,
    "puan": 4.9,
    "id": 9
  },
  {
    "baslik": "React Native İle Mobil Uygulama Geliştirme",
    "url": "www.reactnative.dev",
    "yazar": "Gamze Karadeniz",
    "yorum_sayisi": 12,
    "puan": 5,
    "id": 10
  },
  {
    "baslik": "Node.js Temel Kavramlar",
    "url": "www.nodejs.org",
    "yazar": "Oğuzhan Aksoy",
    "yorum_sayisi": 3,
    "puan": 4.5,
    "id": 11
  }
];
  
  const arananYazilar=yaziListesi.filter(
    function (yazi){
      return yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
       ;
    }
  );

  function handleSearch(event){
    setAramaMetni(event.target.value);
  }
  React.useEffect(()=>{
    localStorage.setItem("aranan",aramaMetni)
  },[aramaMetni])

  return (
    <>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch}/>
      <strong>{aramaMetni} aranıyor...</strong>
      <hr />
      <Liste yazilar={arananYazilar}/>
    </>
  );
}
export default App;
//esra qusi