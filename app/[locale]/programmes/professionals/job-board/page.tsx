const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSWkKjoVV21Rv8OI_-JhoxbqAByUqBHXab7Yy5A_fCbO1Rrkevuzb2qUvsksAkK_Enf5Xs0gHYqxORZ/pub?output=csv";

type JobRow = {
  timestamp: string;
  title: string;
  company: string;
  location: string;
  description: string;
  contactName: string;
  contactInfo: string;
  applicationLink: string;
};

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        field += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ",") {
        row.push(field);
        field = "";
      } else if (char === "\n") {
        row.push(field);
        rows.push(row);
        row = [];
        field = "";
      } else if (char !== "\r") {
        field += char;
      }
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

async function getJobs(): Promise<JobRow[]> {
  const res = await fetch(CSV_URL, { next: { revalidate: 300 } });
  const text = await res.text();
  const rows = parseCsv(text);
  const [, ...dataRows] = rows; // skip header row

  return dataRows
    .filter((r) => r.length >= 8 && r[1])
    .map((r) => ({
      timestamp: r[0],
      title: r[1],
      company: r[2],
      location: r[3],
      description: r[4],
      contactName: r[5],
      contactInfo: r[6],
      applicationLink: r[7],
    }))
    .reverse(); // newest first
}

export default async function JobBoardPage({
  params,
}: {
  params: Promise<{ locale: "en" | "my" }>;
}) {
  const { locale } = await params;
  const jobs = await getJobs();

  return (
    <main className="px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-brand-blue-dark mb-4">
        {locale === "en" ? "Job Board" : "အလုပ်အကိုင်သတင်းဘုတ်"}
      </h1>
      <p className="text-gray-700 mb-8">
        {locale === "en"
          ? "Job opportunities shared by our community members."
          : "ကျွန်ုပ်တို့၏ အသိုင်းအဝိုင်းအဖွဲ့ဝင်များမှ မျှဝေထားသော အလုပ်အကိုင်အခွင့်အလမ်းများ။"}
      </p>

      {jobs.length === 0 && (
        <p className="text-gray-500">
          {locale === "en" ? "No jobs posted yet." : "အလုပ်ကြေညာချက်များ မရှိသေးပါ။"}
        </p>
      )}

      <div className="flex flex-col gap-4">
        {jobs.map((job, i) => (
          <div key={i} className="border border-brand-gold rounded-lg p-5">
            <h2 className="font-bold text-brand-blue text-lg">{job.title}</h2>
            <p className="text-sm text-gray-600 mb-1">{job.company}</p>
            {job.location && <p className="text-sm text-gray-500 mb-2">{job.location}</p>}
            <p className="text-gray-700 mb-3 whitespace-pre-wrap">{job.description}</p>
            <div className="text-sm text-gray-600">
              {job.contactName && <p>Contact: {job.contactName}</p>}
              {job.contactInfo && <p>{job.contactInfo}</p>}
              {job.applicationLink && (
                <a
                  href={job.applicationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue underline"
                >
                  {locale === "en" ? "Apply here" : "ဤနေရာတွင် လျှောက်ထားပါ"}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}