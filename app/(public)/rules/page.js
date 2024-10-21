'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RulesPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const rules = [
    { id: 1, title: 'عضویت در وب‌سایت', content: 'برای ثبت سفارش و خرید، خریدار باید در وب‌سایت بن‌مانو ثبت‌نام کند.\n' +
          '– کاربر باید اطلاعات خود را به‌ شکل صحیح در فرم ثبت‌نام تکمیل کند. مسئولیت هرگونه مغایرت مشخصات ثبت‌شده با هویت واقعی شخص بر عهده فرد است و بن‌مانو مسئولیتی نسبت به مغایرت‌های احتمالی ندارد. صحت اطلاعات به این دلیل دارای اهمیت است که به طور مثال، سفارش‌های کاربر به آدرس فرم ثبت‌نام ارسال می‌شود.' },

    { id: 2, title: 'ثبت سفارش', content: '– دقت در خرید کالا و توجه به مشخصات کالای مورد سفارش بر عهده خریدار است. پیش از تایید نهایی سفارش، موارد ذکر شده را به‌دقت بررسی کنید.\n' +
          '– قیمت‌ محصولات موجود در وب‌سایت به‌روز است و نیازی به ارتباط از طریق تماس تلفنی و ایمیل نیست. همچنین، قیمتی که هنگام سفارش در جمع کل سبد خرید مشاهده می‌کنید معتبر است.\n' +
          '– پس از هر ثبت سفارش، ایمیل و پیامک تائید ثبت سفارش برای مشتریان ارسال می‌شود.\n' +
          '– پس از ثبت سفارش، در صورت لزوم طی تماس تلفنی با مشتری صحت و تائید سفارش گرفته خواهد شد. خواهشمندیم، اطلاعات شماره تماس خود را به‌طور صحیح در فرم‌های مربوطه وارد کنید.\n' +
          '– روز کاری به معنی شنبه تا پنج‌شنبه هر هفته، به استثناء تعطیلات عمومی در ایران است. کلیه سفارش‏‌های ثبت شده در طول روزهای کاری و اولین روز بعد از تعطیلات پردازش می‌‏شوند. مشتریان در ۷ روز هفته و ۲۴ ساعت روز امکان سفارش‌‏گذاری از طریق وب‌سایت را دارند.\n' +
          '– در صورتی که موجودی محصولی در وب‌سایت، بعد از اقدام به سفارش‌‏گذاری مشتری به پایان برسد؛ حق کنسل کردن آن سفارش یا استرداد وجه سفارش برای بن‌مانو محفوظ است. مشتری می‏‌تواند به جای کالای به اتمام رسیده، محصول دیگری را جایگزین یا درخواست بازگشت وجه کند.\n' +
          '– لازم به ذکر است، افزودن کالا به سبد خرید به معنی رزرو کالا نیست و هیچ‌گونه حقی برای مشتری ایجاد نمی‌کند. همچنین تا پیش از ثبت نهایی، هرگونه تغییر از جمله تغییر در موجودی کالا یا قیمت، به کالای افزوده شده در سبد خرید اعمال خواهد شد.\n' +
          '– شایان ذکر است سفارش تنها زمانی نهایی می‌شود که کاربر شماره سفارش خود را بعد از پرداخت، در صفحه تایید سفارش یا از طریق ایمیل دریافت کند.\n' +
          '– ثبت سفارش برای خریدهای عمده، باید طبق هماهنگی قبلی با پشتیبانی بن‌مانو انجام شود و در صورت ثبت سفارش بدون هماهنگی، تصمیم در مورد پردازش یا لغو آن‌ها بر عهده بن‌مانو است.' },

    { id: 3, title: 'تحویل سفارش', content: '– کلیه سفارشات درب اصلی ساختمان منتهی به خیابان تحویل داده می‌شود و همکاران ما اجازه ورود به فضای داخلی ساختمان، مشاعات یا واحد مربوطه را ندارند.\n' +
          '– در صورتی‌ که در دریافت سفارش با تأخیر نامعقولی مواجه شدید، حتماً با پشتیبانی وب‌سایت تماس بگیرید و از ثبت مجدد سفارش بپرهیزید.\n' +
          '– تحویل سفارش در اماکن عمومی مانند کافه، کافی‌نت، رستوران، هتل و … امکان‌پذیر نیست و لازم است آدرس تحویل، دقیق و قابل استناد باشد.\n' +
          '– سفارش‌های تهران توسط ماموران ارسال بن‌مانو در روز و بازه زمانی مشخص‌شده از سوی مشتری ارسال می‌شوند. اگر مشتری به هر دلیلی نتواند سفارش را تحویل بگیرد، همکاران پشتیبان برای هماهنگ کردن زمان ارسال بعدی با مشتری تماس می‌گیرند. لازم به ذکر است، هزینه ارسال برای بار دوم به عهده مشتری است.\n' +
          '– ارسال سفارش‌های شهرستان از طریق شرکت ملی پست ایران انجام می‌گیرد و در صورت صحیح نبودن آدرس مشتری، هزینه ارسال برای بار دوم به عهده مشتری است.' },

    { id: 4, title: 'رویه‌های بازگرداندن کالا', content: 'بن‌مانو همواره نهایت تلاش خود را می‏‌کند تا کلیه سفارش‏‌ها در نهایت صحت و بدون آسیب به دست مشتریان در سراسر کشور برسد.\n' +
          '– در صورت مشاهده هر گونه عیب در بسته‌بندی فیزیکی محصول، نهایتا تا 1 روز کاری بعد از تحویل سفارش با پشتیبانی بن‌مانو تماس بگیرید. لازم است بسته‌بندی اصلی محصول را نگهداری و از دور ریختن آن جدا خودداری کنید.\n' +
          'استفاده از این سرویس تنها در صورتی امکان‌پذیر است که بسته‌بندی اصلی کالا به همراه فاکتور به بن‌مانو بازگردانده شود. در غیر این‌صورت جهت تایید درخواست، نیاز به ارسال مستندات شفاف است.\n' +
          '– چنان‌چه مشتری بعد از دریافت کالا و قبل از باز کردن بسته‌بندی از خرید منصرف شود؛ امکان بازگرداندن کالا تا 7 روز کاری وجود دارد.\n' +
          '– برای بازگرداندن کالا قبل از هر اقدامی با پشتیبانی وب‌سایت بن‌مانو تماس بگیرید و از ارسال کالا بدون هماهنگی جددا خودداری کنید.\n' +
          'در صورتی که ساکن تهران هستید جهت هماهنگی زمان و محل دریافت محصول با پشتیبانی وب‌سایت بن‌مانو تماس بگیرید و در صورتی که ساکن سایر شهرها هستید از شرکت ملی پست اقدام کنید. لازم به ذکر است، هزینه بازگرداندن کالا به عهده مشتریان است.\n' +
          '– اگر ایراد، مغایرت فیزیکی یا آسیب دیدگی ظاهری به تایید کارشناسان بن‌مانو برسد، هزینه‌ی ارسال عودت داده می‌شود.\n' +
          '– پس از این‌که کالایی به دلیل مشخصی مرجوع شد و به دست بن‌مانو رسید، کارشناسان بن‌مانو بررسی‌های لازم را متناسب با دلیل بازگشت آن کالا انجام می‌دهند. در صورت ایراد یا مشکل از سمت بن‌مانو و با تایید کارشناسان، بازگشت کالا نهایی می‌شود و هزینه‌ای که خریدار پرداخت کرده است به انتخاب مشتری به یکی از دو روش زیر بازگردانده می‌شود:\n' +
          '• واریز به حساب بانکی طی 5 روز کاری\n' +
          '• واریز به کیف پول کاربر طی 1 روز کاری\n' +
          'امکان عودت وجه تنها به شماره حساب، شباء و کارتی که از آن کالا خریداری شده است وجود دارد و بن‌مانو از واریز وجه به حساب شخص دیگر یا شماره حساب دیگر معذور است.\n' +
          '– کارت‌های هدیه بن‌مانو امکان مرجوعی ندارند.\n' +
          '– بر روی بسته‌بندی محصولات نباید هیچ‌گونه نوشته یا برچسب اضافی وجود داشته باشد.\n' +
          '– در پروموشن‌ها و حراج‌های زمان‌دار، در صورت پایان مدت زمان تخفیف، معادل مبلغ پرداختی در حین خرید به کیف پول مشتری واریز می‌شود یا کالای جایگزین به قیمت روز و بدون حراج قابل خرید است.' },
  ];

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container my-52 p-4">
      {/* Main rules Box */}
      <div className="bg-orange-300  border mb-10 border-orange-700 dark:border-blue-700 dark:bg-black text-zinc-700 dark:text-white p-6 text-center rounded-lg">
        <h2 className="text-xl font-bold mb-4">قوانین و مقررات</h2>
        <p className="leading-7 text-right">
          کاربر گرامی لطفاً موارد زیر را جهت استفاده بهینه از خدمات وب‌سایت به دقت ملاحظه فرمایید. ورود کاربران به وب‌سایت به معنای آگاه بودن و پذیرش شرایط و قوانین است.
        </p>
      </div>

      {/* rules List */}
      <ul className="space-y-4">
        {rules.map((rule, index) => (
          <li key={rule.id}>
            {/* Title Button */}
            <button
              onClick={() => handleToggle(index)}
              className="bg-orange-300 dark:bg-blue-400 text-zinc-700 dark:text-white py-3 px-4 w-full text-right hover:bg-orange-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-blue-600  rounded-md transition"
            >
              {rule.title}
            </button>

            {/* Animated Content */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="bg-gray-100 text-zinc-700 dark:text-white dark:bg-zinc-800 p-4 mt-2 rounded-md text-right">
                    <p className="leading-7 ">{rule.content}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>
  );
}