import React, { useState } from "react";
import classes from "./QuestionsSection.module.css";
import Card from "../UI/Card";
import QuestionItem from "./QuestionItem";
import TextArea from "../UI/TextArea";
import RadioInput from "../UI/RadioInput";

const QuestionsSection = () => {
  const [question1Answer, setQuestion1Answer] = useState("");
  const [question2Answer, setQuestion2Answer] = useState("");
  const [question3Answer, setQuestion3Answer] = useState("");

  const question1TextAreaChangeHandler = (e) => {
    if (e.target.value.length <= 100) {
      setQuestion1Answer(e.target.value);
    } else {
      return;
    }
  };

  const question2ChangeHandler = (e) => {
    setQuestion2Answer(e.target.value);
  };

  const question3TextAreaChangeHandler = (e) => {
    if (e.target.value.length <= 150) {
      setQuestion3Answer(e.target.value);
    } else {
      return;
    }
  };
  return (
    <Card className={classes.questionsSection}>
      {/* QUESTION 1 */}
      <QuestionItem title={"السؤال الأول:"}>
        <p>
          وجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من
          برامج النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم
        </p>
        <TextArea
          label="اجابتك"
          id="question1"
          placeholder="اكتب هنا..."
          onChange={question1TextAreaChangeHandler}
          value={question1Answer}
          maxLength={100}
        />
      </QuestionItem>
      {/* QUESTION 2 */}
      <QuestionItem title={"السؤال الثاني:"}>
        <RadioInput
          input={{
            id: "question2Option1",
            name: "question2",
            value: "question2Option1",
            onChange: question2ChangeHandler,
          }}
          label={
            "برامج النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم"
          }
        />
        <RadioInput
          input={{
            id: "question2Option2",
            name: "question2",
            value: "question2Option2",
            onChange: question2ChangeHandler,
          }}
          label={"وجد محتوى نصي فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء"}
        />
        <RadioInput
          input={{
            id: "question2Option3",
            name: "question2",
            value: "question2Option3",
            onChange: question2ChangeHandler,
          }}
          label={"قامت مطبعة مجهولة برص مجموعة من الأحرف"}
        />
      </QuestionItem>
      {/* QUESTION 3 */}
      <QuestionItem title={"تبرير:"}>
        <p>برر اختيارك (150) كلمة</p>
        <TextArea
          label="اجابتك"
          id="question1"
          placeholder="اكتب هنا..."
          maxLength={150}
          onChange={question3TextAreaChangeHandler}
          value={question3Answer}
        />
      </QuestionItem>
    </Card>
  );
};

export default QuestionsSection;
