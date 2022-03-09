import React, { useState } from "react";
import classes from "./QuestionsSection.module.css";
import Card from "../UI/Card";
import QuestionItem from "./QuestionItem";
import TextArea from "../UI/TextArea";
import RadioInput from "../UI/RadioInput";
const QuestionsSection = () => {
  const [s, setS] = useState("");
  const [s2, setS2] = useState("");

  const question1TextAreaChangeHandler = (e) => {
    setS(e.target.value);
  };
  
  const question3TextAreaChangeHandler = (e) => {
    setS2(e.target.value);
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
          maxLength={100}
          onChange={question1TextAreaChangeHandler}
          value={s}
        />
      </QuestionItem>
      {/* QUESTION 2 */}
      <QuestionItem title={"السؤال الثاني:"}>
        <RadioInput
          input={{
            id: "question2Option1",
            name: "question2",
            value: "question2Option1",
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
          }}
          label={"وجد محتوى نصي فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء"}
        />
        <RadioInput
          input={{
            id: "question2Option3",
            name: "question2",
            value: "question2Option3",
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
          value={s2}
        />
      </QuestionItem>
    </Card>
  );
};

export default QuestionsSection;
