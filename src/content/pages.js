export const homePage = {
    homeSectionArr: [
      {
        title: "Welcome to Student Feedback Sentiment Analyzer!",
        paragraphsArr: [
          `In order to maintain excellence, institutions must continuously enhance the quality of education they offer, which can be assessed by conducting student evaluations.
        Through this application, students can provide feedback regarding the university, enabling sentiment analysis to be performed on their responses.`,
        ],
      },
    ],
  },
  aboutPage = {
    aboutSectionArr: [
      {
        title: "What is Sentiment Analysis?",
        paragraphsArr: [
          `Sentiment analysis is a field of study that processes people's opinions, that is in written form to be analyzed by either another person or a computer. The opinions expressed can be towards a product, service, issues, and the like. (Liu, 2020).
          It involves analyzing text data to classify it as positive, negative, or neutral based on the underlying emotions or opinions expressed.`,
        ],
      },
      {
        title: "Project Context",
        paragraphsArr: [
          `Due to the COVID-19 pandemic, institutions had to adopt the online mode of learning. As a result, they have become more active in getting student evaluations. As we emerge from the pandemic and move towards more face-to-face learning, it still remains essential to further understand student perception and get recommendations for improvement.`,
          `To address this gap, the researchers proposed to develop a web-based feedback system that will gather student responses and perform sentiment analysis in order to evaluate student sentiments and get recommendations from them.`,
        ],
      },
    ],
    problemsSectionObj: {
      textSectionArr: [
        {
          title: "STATEMENT OF THE PROBLEM",
          paragraphsArr: [
            `As we emerge from the COVID-19 pandemic and move towards more face-to-face learning, universities need to collect feedback from students to evaluate their satisfaction and suggestions for improvement. By getting feedback from students in order to evaluate their satisfaction and suggestions with the university’s mode of learning, the university will have a basis for the creation of its improvement plans.`,
          ],
        },
      ],
      liArr: [
        {
          paragraph: `How satisfied are the students with the institution’s implementation of education?`,
        },
        {
          paragraph: `What recommendations can be derived from the results to improve the implementation of education?`,
        },
        {
          paragraph: `How can sentiment analysis be utilized to determine the recommendations of students about the institution’s implementation of education, student services, faculty, facilities?`,
        },
        {
          paragraph: `How to determine which algorithm is more effective for the sentiment analysis of student feedback?`,
        },
        { paragraph: `How can the results be visualized?` },
      ],
    },
    objectivesSectionObj: {
      textSectionArr: [
        {
          title: "GENERAL OBJECTIVES",
          paragraphsArr: [
            `The general objective of this study is to develop a feedback application to collect responses from students about their sentiments and recommendations for the improvement of the quality of the implementation of online education and course subjects by the university during the COVID-19 pandemic, and perform sentiment analysis, and visualize the results in the application for users with administrator privileges.`,
          ],
        },
        {
          title: "SPECIFIC OBJECTIVES",
          paragraphsArr: [`Specifically, the study aims to:`],
        },
      ],
      liArr: [
        {
          paragraph: `Determine students' sentiments about the institution’s implementation of education.`,
        },
        {
          paragraph: `Get recommendations from students for the improvement of the institution’s implementation of education, student services, faculty, facilities.`,
        },
        {
          paragraph: `Determine what algorithm/technique can be utilized to perform the sentiment analysis about the institution’s implementation of education, student services, faculty, facilities.`,
        },
        { paragraph: `Evaluate the accuracy of the algorithms used.` },
        {
          paragraph: `Visualize the results of the sentiment analysis using the pyplot module of Matplotlib in Python`,
        },
      ],
    },
    significanceSectionObj: {
      textSectionArr: [
        {
          title: "SIGNIFICANCE OF THE STUDY",
          paragraphsArr: [
            `This study would be beneficial to students and researchers that would want information relating to student sentiments regarding the implementation of education of the University as “more classes are being held onsite”. The information that is given has been analyzed and summarized using sentiment analysis. This paper would also be beneficial to the university in determining what to improve based on the results of the sentiment analysis.`,
          ],
        },
      ],
      liArr: [
        {
          title: "Students",
          paragraph: `This research would provide students a platform to give feedback using the application. This would allow them to actively express their sentiments or opinions regarding “implementation of education”, and raise concerns they want to be addressed.`,
        },
        {
          title: "University",
          paragraph: `The University would receive data relating to the feedback given by the users from the application on their experiences within the university. The data gathered and analyzed can help the University to create and execute a plan that would alleviate or improve the condition of the students within the said university.`,
        },
        {
          title: "Future Researchers",
          paragraph: `Future researchers that are interested in further developing applications that utilize sentiment analysis will benefit from this study. Information such as the models used for performing the analysis and their accuracy, the framework of the system and the results of the study will be beneficial for future researchers.`,
        },
      ],
    },
    scopeSectionObj: {
      textSectionArr: [
        {
          title: "SCOPE AND DELIMITATION",
          paragraphsArr: [
            `The study will focus on student feedback to University’s implementation of education after online classes. The implementation of education pertains to how the university conducts both on-site and online classes, their plans (including the process of monitoring progress and making adjustments) and policies.`,
            `The respondents of this study are the students of in the school year 2022-2023. To make sure that only the students of the university can provide responses, the user must be able to login with a University school account (Office 365 account). Microsoft Forms containing the questionnaires will be embedded on the web application in order to impose this limitation. Student responses will be collected and compiled in an Excel file, which will then be passed into the sentiment analysis engine. The data will be preprocessed in the following steps: `,
            `(1) Tokenization, (2) Stemming and (3) Lemmatization. The Machine Learning algorithms for sentiment classification are delimited to: (1) Support Vector Machine (SVM), (2) Naïve Bayes (NB) and (3) Voting Ensemble. For feature extraction, Word Embeddings will be used to determine the most common responses and identify which factors affected the positivity, negativity or neutrality of the sentiments, and derive recommendations. There will be an individual summary and visualization for each criterion (implementation of education, student services, faculty, facilities).`,
          ],
        },
      ],
    },
    conceptualSectionObj: {
      textSectionArr: [
        {
          title: "CONCEPTUAL FRAMEWORK",
          paragraphsArr: [
            `Figure 1 shows the overall architecture of the application. It starts from the student interface through data gathering by asking the user for personal information and feedback and storing it into the database. From the database, the data is then preprocessed through tokenization, removal of stopwords, stemming and/or lemmatization. For feature extraction, Word Embeddings will be applied to convert the words into vectors. Sentiment analysis (classification) is performed using Support Vector Machine, Naive Bayes, and Voting Ensemble. The model is then evaluated to determine its accuracy and then the results are concluded. Finally, the results will be shown on the application on the administrator interface and sent to students through their email.`,
          ],
        },
        { title: "ALGORITHM AND ITS RULES" },
      ],
      liArr: [
        {
          title: "Word Embeddings",
          paragraph: [
            `Word embeddings is a technique where individual words are transformed into a numerical representation of the word (a vector). Word2Vec is one of the most popular techniques to apply word embeddings using a shallow neural network. Word2Vec has two methods for learning representations of words:`,
            `(1) Continuous bag-of-words model:  predicts a target word based on the surrounding context words. The context consists of a few words before and after the current word and the order of words in the context is not important; (2) Continuous skip-gram model: predicts words within a certain range before and after the current word in the same sentence.`,
          ],
        },
        {
          title: "Naïve Bayes",
          paragraph: [
            `Naïve Bayes is a collection of classification algorithms based on the Bayes Theorem. The Naïve Bayes classifier predicts the tag of a text. It calculates the probability of each tag for a given text, assuming the probability of a word occurring is independent of its position within the text, and then outputs the tag with the highest one. The probability P is defined as follows:`,
            `P (A |B) is the probability of class x. Where x is the target, and predictor is the attribute. P(A) is the prior probability of class. P (B|A) is the probability of a predictor of the given class. P(B) is the prior probability of the predictor.`,
          ],
        },
        {
          title: "Support Vector Machine (SVM)",
          paragraph: [
            `Support Vector Machine (SVM) is a supervised learning method that analyzes data for classification and regression analysis. A support vector machine creates a hyperplane or a set of hyperplanes in an n-dimension space for classification or regression. It categorizes data points by mapping data to a high dimensional feature space. A data point "a'' belongs to either of the regions depending on the value of f(a).`,
            `If f(a) > 0 it belongs to one region and if f(a) < 0 it belongs to another region. The support vector machine then takes these data points and outputs the hyperplane separating the tags the best. This means that the Support Vector Machine selects the hyperplane that maximizes margins from the tags or whose distance to the nearest element of each tag is the farthest.`,
          ],
        },
        {
          title: "Ensemble Classifier",
          paragraph: [
            `Ensemble Algorithms aims to use or combine the predictions from multiple models and it has different classes as well, for this study it will be used as a Voting classifier using the Naive Bayes and Support Vector Machine as its components.`,
          ],
        },
      ],
    },
  };
