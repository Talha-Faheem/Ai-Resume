
import { IoMdBook } from "react-icons/io";
import FAQbox from "./FAQbox";
function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "Is AI Resume Builder really free to start?",
      answer:
        "Yes. Our Free plan lets you create one resume, use up to 5 AI enhancement credits each month, and access 5 professionally designed templates. No credit card is required to get started.",
    },
    {
      id: 2,
      question: "How does the ATS scoring algorithm work?",
      answer:
        "Our ATS Score analyzes your resume against industry best practices. It evaluates keyword relevance, formatting, readability, section structure, and overall compatibility with Applicant Tracking Systems. It also provides actionable suggestions to improve your score.",
    },
    {
      id: 3,
      question: "Can I export my resume to PDF?",
      answer:
        "Yes. You can download your resume as a high-quality PDF while preserving its professional layout. Pro users may also have access to additional export formats such as DOCX.",
    },
    {
      id: 4,
      question: "How many resumes can I create and store?",
      answer:
        "Free users can create and save one resume. Pro users can create, manage, and store unlimited resumes, making it easy to customize applications for different job opportunities.",
    },
    {
      id: 5,
      question: "Is my personal data secure and private?",
      answer:
        "Absolutely. Your personal information is protected using industry-standard encryption and secure storage practices. We never sell your data, and only you have access to your resumes unless you choose to share them.",
    },
    {
      id: 6,
      question: "Can I cancel my Pro subscription anytime?",
      answer:
        "Yes. You can cancel your Pro subscription at any time from your account settings. Your subscription will remain active until the end of the current billing period, and you won't be charged again unless you renew.",
    },
  ];
  
  return (
    <div className="text-center mt-20 py-3 w-full">
      <span className=" inline-block px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400">
        <div className="flex gap-3 items-center">
          <IoMdBook /> <p>FAQ</p>{" "}
        </div>
      </span>
      <h2 className="mt-6 text-4xl font-bold  text-white">
        Frequently asked questions
      </h2>

      <div className="mt-15 flex items-center gap-3 flex-col text-white w-full">
        {faqs.map((e) => {
          {
            return (
              <FAQbox key={e.id} question={e.question} answer={e.answer}/>
            );
          }
        })}
      </div>
    </div>
  );
}

export default FAQ;
