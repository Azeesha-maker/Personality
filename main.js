
        const questions = [
            {
                text: "Do you often make others laugh?",
                image: "images/Q1.jpg", // Image 1
                options: [
                    "Yes, I'm always the funny one!",
                    "Sometimes, but not always.",
                    "Rarely, I don't like to joke around much.",
                    "Never, I am serious most of the time."
                ],
                points: [4, 3, 2, 1]
            },
            {
                text: "How do you handle stressful situations?",
                image: "images/Q2.jpg", // Image 2
                options: [
                    "I try to stay calm and positive.",
                    "I get frustrated but try to control myself.",
                    "I lose my temper and get angry quickly.",
                    "I avoid stressful situations at all costs."
                ],
                points: [4, 3, 1, 2]
            },
            {
                text: "How do you recharge after a long day?",
                image: "images/Q3.jpg", // Image 3
                options: [
                    "I spend time with friends or go out.",
                    "I like to relax alone, maybe read or watch TV.",
                    "I enjoy doing hobbies like drawing or gaming.",
                    "I just go to bed early and sleep."
                ],
                points: [4, 3, 2, 1]
            },
            {
                text: "How empathetic are you when others are upset?",
                image: "images/Q4.jpg", // Image 4
                options: [
                    "I feel their emotions deeply and try to help.",
                    "I try to help, but sometimes don't know how.",
                    "I tend to avoid people who are upset.",
                    "I get uncomfortable when others are upset."
                ],
                points: [4, 3, 2, 1]
            },
            {
                text: "Do you tend to be optimistic or pessimistic?",
                image: "images/Q5.jpg", // Image 5
                options: [
                    "I always try to see the bright side.",
                    "I usually stay positive, but sometimes feel negative.",
                    "I often expect things to go wrong.",
                    "I am very negative and expect the worst."
                ],
                points: [4, 3, 2, 1]
            }
        ];

        let currentQuestionIndex = 0;
        let userAnswers = [];

  
        function loadNextQuestion() {
            const selectedAnswer = document.querySelector('input[name="answer"]:checked');
            if (!selectedAnswer) return; 

            userAnswers.push(parseInt(selectedAnswer.value)); 
            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                renderQuestion(currentQuestionIndex);
            } else {
                displayResult();
            }
        }

 
        function renderQuestion(index) {
            const question = questions[index];
            document.getElementById("question-text").textContent = question.text;

          
            document.getElementById("question-image").src = question.image;

            const options = document.querySelector(".answer-options");
            options.innerHTML = "";

            question.options.forEach((option, i) => {
                const optionBtn = document.createElement("button");
                optionBtn.classList.add("answer-btn");
                optionBtn.innerHTML = `<input type="radio" name="answer" value="${i}" /> ${option}`;
                options.appendChild(optionBtn);
            });
        }

        
        function displayResult() {
            const totalPoints = userAnswers.reduce((acc, answer) => acc + answer, 0);

            let personalityType = "";
            if (totalPoints >= 18 && totalPoints <= 20) {
                personalityType = "You're a Funny Optimist! You light up the room with your sense of humor and positive outlook.";
            } else if (totalPoints >= 15 && totalPoints < 18) {
                personalityType = "You're a Relaxed Empath! You tend to be calm, understanding, and thoughtful.";
            } else if (totalPoints >= 10 && totalPoints < 15) {
                personalityType = "You're a Thoughtful Introvert! You enjoy time alone and prefer to keep a low profile.";
            } else {
                personalityType = "You're a Serious Realist! You tend to focus on facts and are often serious about things.";
            }

            document.getElementById("question-card").style.display = "none";
            document.getElementById("result").style.display = "block";
            document.getElementById("result-text").textContent = personalityType;
        }

      
        function startQuiz() {
            renderQuestion(currentQuestionIndex);
        }

        document.getElementById("next-btn").addEventListener("click", loadNextQuestion);

      
        startQuiz();
    