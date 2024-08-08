import React ,{useState}from 'react';

import Sidebar from '../ModernSidebar';
import './Blog.css';
const questionsAnswers = [
  {
    question: 'Kısaca Mesleki Anlamda Emre Parlak Kimdir?',
    answer: "Emre Parlak,enerji sektöründeyaklaşık 4 senedir farklı pozisyonlarda görev almıştır.Hali hazırda ADM Elektrik Dağıtım A.Ş.'de İşletme Mühendisi olarak görev yapmakta ve reaktif güç kontrolü, trafo merkezi kapasite hesapları, yazılım geliştirme gibi konularda önemli başarılara imza atmıştır. Geliştirdiği yazılımlar sayesinde şirketine büyük mali tasarruflar sağlamış ve teknik süreçlerin verimliliğini artırmıştır. Emre, teknik bilgi birikimini sürekli güncelleyerek mühendislik kariyerini üretken ve yenilikçi bir yaklaşımla sürdürmektedir."  },
    {
      question: 'Meslek hayatında hangi şirketlerde görev aldı?',
      answer: ['ADM EDAŞ - Sistem İşletme Mühendisi (2022 Temmuz- ).',
      'ARAS EDAŞ - Arıza Onarım Ve Bakım Mühendisi (2021 Mart-2022 Temmuz ).']
    },
    {
      question: 'Hangi Üniversite Mezunu?',
      answer: ['Karadeniz Teknik Üniversitesi Elektrik Elektronik Mühendisliği Mezunu (2015-2020).'
      ]
    },
  {
    question: 'Teknik Yetkinlikleri Nelerdir?',
    answer: ['Backend :Javascript ve Java Programlama Dilleri','Frontend : React ,HTML 5 ve CSS ' ,'Microsoft SQL ,Postgre SQL, NO SQL: Mongo DB veri tabanlarını ileri düzeyde kullanır','Çizim Programları : Auto-Cad,E-Plan','Microsoft Office Programlarına ileri seviyede hakimdir.']
  },
  {
    question: 'Bu Siteyi Neden Oluşturma İhtiyacı Hissetti?',
    answer: ['Aşırı akım fider koruma rölelerine dair bir çok fonksiyonu barındıran özelleştirilmiş bir web sitesi mevcut değildi. Online olarak kullanılabilecek bu site sayesinde dinamik olarak'+
    ' değiştirilebilen her bir configrasyon parametre değerinin anlık olarak rölelerin grafiğini nasıl şekillendirdiğini kullanıcılar takip edebiliyor.Bu sayade tüm koruma yapılacak noktaların genel durumu tespit edilip ilgili hesaplamalar yapılabiliyor.Kısacası sektörde böyle bir web sitesine ihtiyaç olduğu düşünüldüğü için geliştirildi.']

  },
  {
    question: 'Bu Site Genel Olarak Kimlere Hitap Ediyor?',
    answer: 'Scada-Röle mühendislerine ,iletim ve dağıtım şebekelerinde selective(koruma) yi sağlamak isteyen teknik birimlere,akademisyen ve ilgili bölümlerin üniversite öğrencilerine...'
   
  },
  {
    question: 'Hobileri nelerdir ?',
    answer: 
    ['Müzik : Kısa sap bağlama ve ney enstrümanlarını çalıyor.Hobi amaçlı kaydettiği videoları izlemek için ',<a href="https://www.instagram.com/parlaknagmeler?igsh=MThlOHQ0anl4bTRiaQ==" target="_blank" rel="noopener noreferrer">buraya tıklamanız yeterli. (İnstagram : @parlaknagmeler) </a>,
    ' Spor : Futbol-Voleybol ve Basketbol branşlarında lisanlı sporcu geçmişi var.'
    +'Son olarak Denizli ilinde düzenlenen 24 şirketin katıldığı basketbol turnuvasında ADM EDAŞ takımında yer alarak ilk 4 takım arasına girme başarısı gösterdiler.']
  },
  {
    question: 'Emre Parlak ile İletişim Kurmak İçin...',
    answer: 
    ['Linkedİn Hesabı : ',<a href="https://www.linkedin.com/in/eem-emre-parlak/" target="_blank" rel="noopener noreferrer">tıklayınız.  </a>,
    ' mail adresi : eememreprlk@gmail.com']
  },

];

const Blogx = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };
  return (
    <div className="App">
      <div className="blog">
        <h1>Emre PARLAK</h1>
      
        <div className="about-me">
        <div className="photo-container">
        <img src="https://iili.io/daBvsja.jpg" alt="My Photo" className="photo" />
        </div>
 <p>Merhaba, beni tanımak adına sorabileceğin bir kaç temel soruyu aşağıda senin için özetledim işte sorabileceğini düşündüğüm sorulardan bir kaçı  :</p>
          <div className="questions">
      {questionsAnswers.map((qa, index) => (
          <div key={index} className="question-answer">
            <h2 onClick={() => handleQuestionClick(index)} className="question">
              {qa.question}
            </h2>
            {openQuestionIndex === index && (
              typeof qa.answer === 'string' ? (
                <p className="answer">{qa.answer}</p>
              ) : (
                <ul className="answer">
                  {qa.answer.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
              )
            )}
          </div>
        ))}
      </div>
        </div>
     
      </div>
      <Sidebar/>
    </div>
  );
};

export default Blogx;

/*
const questionsAnswers = [
  {
    question: 'Kısaca Mesleki Anlamda Emre Parlak Kimdir?',
    answer: 'Teknik ve araştırmaya dair konularla ilgilenmeyi seven bir .'
  },
  {
    question: 'What technologies do I specialize in?',
    answer: 'I specialize in React, JavaScript, Node.js, and CSS. I also have experience with various other web development technologies.'
  },
  {
    question: 'Bu Siteyi Neden Oluşturma İhtiyacı Hissettin?',
    answer: ['Çünkü aşırı akım fider koruma rölelerine dair bir çok fonksiyonu barındıran özelleştirilmiş bir web sitesi mevcut değildi. Online olarak kullanılabilecek bu site sayesinde dinamik olarak',
    ' değiştirilebilen her bir configrasyon parametre değerinin anlık olarak rölelerin grafiğini nasıl şekillendirdiğini kullanıcılar takip edebiliyor']

  },
  {
    question: 'Geliştirdiğin Site Genel Olarak Kimlere Hitap Ediyor?',
    answer: 'Scada-Röle mühendislerine ,iletim ve dağıtım şebekelerinde selective(koruma) yi sağlamak isteyen teknik birimlere,akademisyen ve ilgili bölümlerin üniversite öğrencilerine...'+ 
    " siteyi kullanan akademisyenler artık öğrencilere kap kara taranmış eski PDF dosyalarından röle grafiğini öğrencilere inceletmek yerine dinamik ve modern bir site üzerinden anlık olara simüle edebilecek. :) "
  },
  {
    question: 'Hobilerin nedir ?',
    answer: 'Uzun yıllardır lisanlı olarak futbol,voleybol ve basketbol oynadım.Farklı bölgesel liglerde şampiyonluklar elde ettik takımca.Müzikle ilgilenip ney üflüyor ve kısa sap bağlama enstrümanlarını icra ediyorum'+
    " Şahsi müzik instagram hesabımdan kaydettiğim videoları inceleyebilirsiniz :)"
  },
  // Daha fazla soru-cevap ekleyebilirsiniz
];

const Blog = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="blog">
      <h1>Emre PARLAK HAKKINDA</h1>
      <p>Merhaba! Beni tanımak adına sorabileceğin bir kaç temel soruyu aşağıda senin için özetledim işte sorabileceğini düşündüğüm sorulardan bir kaçı  :</p>
      <div className="questions">
      {questionsAnswers.map((qa, index) => (
          <div key={index} className="question-answer">
            <h2 onClick={() => handleQuestionClick(index)} className="question">
              {qa.question}
            </h2>
            {openQuestionIndex === index && (
              typeof qa.answer === 'string' ? (
                <p className="answer">{qa.answer}</p>
              ) : (
                <ul className="answer">
                  {qa.answer.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

function Blogx() {
  return (
    <div className="Blog">
      <Sidebar/>
      <Blog />
    </div>
  );
}*/


