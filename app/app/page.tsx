export default function HomePage() {
  return (
    <main className="mx-auto max-w-lg p-6">
      <h1 className="text-2xl font-semibold mb-2">منصة تقييم فيديو التوحد</h1>
      <p className="text-gray-500 mb-6">
        أداة مساعدة للمعالجين لمراجعة جلسات الفيديو وإصدار تقارير سلوكية.
      </p>
      <a href="/children/new" className="inline-block bg-slate-900 text-white rounded px-4 py-2">
        إضافة طفل جديد
      </a>
    </main>
  );
}
