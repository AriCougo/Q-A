import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        question: {
          'majorProgram': 'What majors or programs does the university offer?',
          'libraryClose': 'What time does the library close?',
          'financialAid' : 'How do I apply for financial aid?',
        },
        answer: {
          'universityBenefits': `The university offers a wide range of undergraduate
          and graduate programs in various fields such as Arts and Humanities, Business, 
          Engineering, Health Sciences, Natural Sciences, and Social Sciences. Please visit the university's`,
          'avarageSizeOfClass' : `The average class size varies depending on the course and the level of study. 
          However, the university strives to maintain a low student-to-faculty ratio to ensure personalized attention
           and a high-quality learning experience.`,
          'availableAids' : `The university offers several types of financial aid, including scholarships, grants, 
           work-study opportunities, and loans. Financial aid packages are determined based on a variety of factors, 
           including academic merit and financial need. For more detailed information, please contact the university’s 
           financial aid office.`
        },
        title: {
          'questionTitle' : 'Did not find your answer?'
        },
        secondTitle: {
          'leaveQuestion' : 'Leave your question'
        },
        inputPlaceholder: {
          'placeholder': 'leave your question'
        }
      },
      pt: {
        question: {
          'majorProgram': 'Quais cursos ou programas a universidade oferece?',
          'libraryClose': 'Que horas a biblioteca fecha?',
          'financialAid' : 'Como eu faço para solicitar assistência financeira?',
        },
        answer: {
          'universityBenefits': 'A universidade oferece uma ampla gama de programas de graduação e pós-graduação em várias áreas, como Artes e Humanidades, Negócios, Engenharia, Ciências da Saúde, Ciências Naturais e Ciências Sociais. Por favor, visite o site da universidade ou entre em contato com o escritório de admissões para obter uma lista completa dos programas.',
          'avarageSizeOfClass' : 'O tamanho médio das turmas varia dependendo do curso e do nível de estudo. No entanto, a universidade se esforça para manter uma baixa proporção de alunos por professor para garantir atenção personalizada e uma experiência de aprendizado de alta qualidade.',
          'availableAids' : 'A universidade oferece vários tipos de assistência financeira, incluindo bolsas de estudo, subsídios, oportunidades de trabalho e estudo, e empréstimos. Os pacotes de assistência financeira são determinados com base em uma variedade de fatores, incluindo mérito acadêmico e necessidade financeira. Para obter informações mais detalhadas, entre em contato com o escritório de assistência financeira da universidade.'
        },
        title: {
          'questionTitle' : 'Não achou sua reposta?'
        },
        secondTitle: {
          'leaveQuestion' : 'Deixe a sua pergunta'
        },
        inputPlaceholder: {
          'placeholder': 'Deixe a sua pergunta'
        }
      },
      kr:{
        question: {
          'majorProgram': '대학에서 어떤 전공이나 프로그램을 제공하나요?',
          'libraryClose': '도서관은 몇 시에 문을 닫나요?',
          'financialAid' : '재정 지원은 어떻게 신청하나요?',
        },
        answer: {
          'universityBenefits': '대학은 예술 및 인문학, 비즈니스, 공학, 보건 과학, 자연 과학, 사회 과학 등 다양한 분야의 학부 및 대학원 프로그램을 제공합니다. 프로그램의 전체 목록을 얻으려면 대학의 웹사이트를 방문하거나 입학 사무실에 문의하십시오.',
          'avarageSizeOfClass' : '평균 수업 규모는 과목과 학습 수준에 따라 다릅니다. 그러나 대학은 개인화된 주의와 고품질의 학습 경험을 보장하기 위해 학생 대 교수 비율을 낮게 유지하려고 노력합니다.',
          'availableAids' : '대학은 장학금, 보조금, 취업-학습 기회, 대출 등 여러 종류의 재정 지원을 제공합니다. 재정 지원 패키지는 학문적 업적과 재정적 필요성 등 다양한 요인을 고려하여 결정됩니다. 보다 자세한 정보를 얻으려면 대학의 재정 지원 사무실에 문의하십시오.'
        },
        title: {
          'questionTitle' : '답을 찾지 못하셨나요?'
        },
        secondTitle: {
          'leaveQuestion' : '질문을 남겨주세요'
        },
        inputPlaceholder: {
          'placeholder': '질문을 남겨주세요'
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
