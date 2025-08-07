
'use client';

import { useLanguage } from '@/context/language-context';
import { Lightbulb } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const quotes = {
    en: [
        { text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" },
        { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
        { text: "The roots of education are bitter, but the fruit is sweet.", author: "Aristotle" },
        { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" }
    ],
    ar: [
        { text: "الشيء الجميل في التعلم هو أنه لا يمكن لأحد أن يأخذه منك.", author: "بي بي كينج" },
        { text: "التعليم هو أقوى سلاح يمكنك استخدامه لتغيير العالم.", author: "نيلسون مانديلا" },
        { text: "جذور التعليم مُرّة، لكن ثماره حلوة.", author: "أرسطو" },
        { text: "عش كأنك ستموت غدًا. تعلم كأنك ستعيش إلى الأبد.", author: "المهاتما غاندي" }
    ]
};

export function WelcomeMessage() {
  const { language } = useLanguage();
  const [quote, setQuote] = useState<(typeof quotes.en)[0] | null>(null);

  useEffect(() => {
    setQuote(quotes.en[Math.floor(Math.random() * quotes.en.length)]);
  }, []);

  if (!quote) {
    return (
        <div className="rounded-lg border bg-card text-card-foreground p-6 shadow-sm animate-pulse">
            <div className="h-8 bg-muted rounded w-1/3"></div>
        </div>
    );
  }

  const currentQuote = language === 'ar' 
    ? quotes.ar.find(q => q.author === quote.author) || quote
    : quote;

  return (
    <div className="rounded-lg border bg-card text-card-foreground p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-2 md:mb-0">
            {language === 'en' ? `Welcome back!` : `أهلاً بعودتك!`}
            </h2>
            {currentQuote.text && (
                <div className="flex items-center text-sm text-muted-foreground">
                    <Lightbulb className="w-4 h-4 me-2 text-yellow-500" />
                    <p>
                        <span className="italic">"{currentQuote.text}"</span> – {currentQuote.author}
                    </p>
                </div>
            )}
        </div>
    </div>
  );
}

    