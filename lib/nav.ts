export type NavItem = {
  label: { en: string; my: string };
  href: string;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  { label: { en: "Home", my: "ပင်မစာမျက်နှာ" }, href: "" },
  {
    label: { en: "About Us", my: "ကျွန်ုပ်တို့အကြောင်း" },
    href: "/about",
    children: [
      { label: { en: "Who We Are", my: "နောက်ခံသမိုင်း" }, href: "/about/who-we-are" },
      { label: { en: "Our Mission", my: "မျှော်မှန်းချက်နှင့် လုပ်ငန်းစဉ်" }, href: "/about/mission" },
      { label: { en: "Our Team", my: "ကျွန်ုပ်တို့အဖွဲ့" }, href: "/about/team" },
    ],
  },
  {
    label: { en: "Community", my: "လူထုဝန်းကျင်" },
    href: "/community",
    children: [
      { label: { en: "Community Support", my: "လူထုကူညီပံ့ပိုးမှု" }, href: "/community/support" },
      { label: { en: "Community Directory", my: "လူထုကွန်ရက်လမ်းညွှန်" }, href: "/community/directory" },
    ],
  },
  {
    label: { en: "Programmes", my: "ကဏ္ဍအလိုက် အစီအစဉ်များ" },
    href: "/programmes",
    children: [
      { label: { en: "Youth", my: "လူငယ်ကဏ္ဍ" }, href: "/programmes/youth" },
      { label: { en: "Women", my: "အမျိုးသမီးကဏ္ဍ" }, href: "/programmes/women" },
      { label: { en: "Professionals", my: "ကျွမ်းကျင်ပညာရှင်များ" }, href: "/programmes/professionals" },
    ],
  },
  {
    label: { en: "Events", my: "ပွဲလမ်းသဘင်များ" },
    href: "/events",
    children: [
      { label: { en: "Regular Events", my: "ပုံမှန်ပွဲများ" }, href: "/events/regular" },
      { label: { en: "Special Events", my: "အထူးပွဲများ" }, href: "/events/special" },
      { label: { en: "AGM/Member Meeting", my: "နှစ်ပတ်လည် အစည်းအဝေးနှင့် အသင်းဝင်တွေ့ဆုံပွဲများ" }, href: "/events/agm" },
    ],
  },
  { label: { en: "Humanitarian", my: "လူသားချင်းစာနာမှုအကူအညီများ" }, href: "/humanitarian" },
  { label: { en: "News & Stories", my: "သတင်းနှင့် ဖြစ်ရပ်များ" }, href: "/news" },
  {
    label: { en: "Get Involved", my: "ပူးပေါင်းပါဝင်ရန်" },
    href: "/get-involved",
    children: [
      { label: { en: "Volunteer", my: "စေတနာ့ဝန်ထမ်း" }, href: "/get-involved/volunteer" },
      { label: { en: "Membership", my: "အသင်းဝင်အဖြစ် ပါဝင်ရန်" }, href: "/get-involved/membership" },
      { label: { en: "Sponsorship", my: "ပံ့ပိုးကူညီရန်" }, href: "/get-involved/sponsorship" },
    ],
  },
  { label: { en: "Contact", my: "ဆက်သွယ်ရန်" }, href: "/contact" },
];