function randomizeAnswers() {
  // Lấy tất cả các câu hỏi
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    // Lấy tất cả các câu trả lời của câu hỏi hiện tại
    const answers = question.querySelectorAll('input[type="radio"]');

    // Random chỉ số của câu trả lời
    const randomIndex = Math.floor(Math.random() * answers.length);

    // Đánh dấu (check) câu trả lời đã được random
    answers[randomIndex].checked = true;
  });
}

// Thêm sự kiện click cho nút "Random Answer"
document.getElementById("random-answer-btn").addEventListener("click", randomizeAnswers);
