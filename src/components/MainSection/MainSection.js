import React from "react";
import classes from "./MainSection.module.css";
import placeholderImage from "../../assets/placeholderImage.jpg";
import Card from "../UI/Card";
const MainSection = () => {
  return (
    <Card className={classes["main-section"]}>
      <div className={classes.content}>
        <h2>العنوان</h2>
        <p>
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
          التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ
          طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا
          يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من
          برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل
          إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث
          ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين
          ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة،
          وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها. ما هو "لوريم
          إيبسوم" ؟ لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية
          هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان
          لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما
          قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص،
          لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن
          لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة
          والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار
          رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد
          لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج
          مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.
          أين أجده ؟ هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن
          الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية
          إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق
          أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا
          النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة
          تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة، يقوم
          مولّدنا هذا باستخدام كلمات من قاموس يحوي على أكثر من 200 كلمة لا
          تينية، مضاف إليها مجموعة من الجمل النموذجية، لتكوين نص لوريم إيبسوم ذو
          شكل منطقي قريب إلى النص الحقيقي. وبالتالي يكون النص الناتح خالي من
          التكرار، أو أي كلمات أو عبارات غير لائقة أو ما شابه. وهذا ما يجعله أول
          مولّد نص لوريم إيبسوم حقيقي على الإنترنت.
        </p>
        <img src={placeholderImage} alt="PersonImage" />
      </div>
    </Card>
  );
};

export default MainSection;
