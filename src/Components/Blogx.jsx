import React, { useState } from 'react';
import './Blog.css';
import Sidebar from '../ModernSidebar';

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
}

export default Blogx;
