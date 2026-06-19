import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 text-gray-800">

      {/* Header */}
      <section className="flex items-center gap-6 mb-8">
        <Image
          src="/Avatar.jpg"
          alt="Le Quang Hai"
          width={96}
          height={96}
          className="rounded-full object-cover flex-shrink-0 ring-2 ring-gray-200"
          priority
        />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Le Quang Hai</h1>
          <p className="text-sm text-gray-500 mt-0.5">MSc · FCCA · CPA (Vietnam)</p>
          <p className="text-sm font-medium text-gray-700 mt-1">
            Senior Finance Leader | FP&amp;A · Statutory Reporting · Tax · Controls &amp; Risk | Ex-Big 4 Audit
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-gray-500">
            <span>Hanoi, Vietnam</span>
            <span>+84 966 267 566</span>
            <a href="mailto:lequanghai@outlook.com" className="hover:text-blue-600 transition-colors">lequanghai@outlook.com</a>
            <a href="https://linkedin.com/in/haiqle" className="hover:text-blue-600 transition-colors">linkedin.com/in/haiqle</a>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="mb-7">
        <h2 className="text-xs font-bold uppercase tracking-widest text-blue-700 border-b border-gray-200 pb-1 mb-3">
          Professional Summary
        </h2>
        <p className="text-sm leading-relaxed">
          Senior finance leader with 15+ years across Big 4 audit, banking internal audit, and finance leadership.
          Now Head of Financial Analytics &amp; Control at Vietnam&apos;s leading ICT distributor. FCCA (UK, Fellow)
          and CPA Vietnam (Auditor). Strong in financial planning and control, statutory and management reporting,
          internal controls and risk.
        </p>
      </section>

      {/* Core Competencies */}
      <section className="mb-7">
        <h2 className="text-xs font-bold uppercase tracking-widest text-blue-700 border-b border-gray-200 pb-1 mb-3">
          Core Competencies
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Financial Planning, Budgeting & Forecasting",
            "Cash Flow & Treasury Management",
            "Month-End / Year-End Close",
            "Statutory & Management Reporting",
            "Tax & VAT Compliance (CIT, VAT, WHT)",
            "Internal Controls & Risk Frameworks",
            "Procurement & Project Payment Review",
            "Contract & Cost Governance",
            "Audit, Fraud Investigation & Remediation",
            "IFRS / VAS Conversion & Compliance",
          ].map((item) => (
            <span key={item} className="bg-blue-50 text-blue-800 text-xs px-3 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-7">
        <h2 className="text-xs font-bold uppercase tracking-widest text-blue-700 border-b border-gray-200 pb-1 mb-4">
          Professional Experience
        </h2>

        <div className="mb-5">
          <div className="flex justify-between items-baseline flex-wrap gap-x-2">
            <span className="font-semibold">Synnex FPT — Hanoi, Vietnam</span>
            <span className="text-xs text-gray-500">Mar 2026 – Present</span>
          </div>
          <p className="text-sm italic text-gray-500 mb-2">Head of Financial Analytics and Control</p>
          <ul className="list-disc list-outside ml-4 text-sm space-y-1 text-gray-700">
            <li>Lead financial planning and control for Vietnam&apos;s leading ICT distributor. Help leaders build, review, and adjust business plans in a high-volume, low-margin trading model.</li>
            <li>Own and improve the management reporting system. Turn revenue, margin, inventory, and working-capital data into clear insights for budgeting, forecasting, and decisions.</li>
            <li>Plan and run the internal control program. Set the scope and timing of reviews, track results, and recommend fixes that strengthen the internal control system.</li>
            <li>Lead procurement and review payment dossiers for construction of Synnex FPT&apos;s new warehouse. Check contracts, costs, and supporting documents before each payment is approved.</li>
            <li>Review the new VAT rule for SaaS (cloud software) products. Identify and quantify extra output VAT so the company stays compliant and prices correctly.</li>
          </ul>
        </div>

        <div className="mb-5">
          <div className="flex justify-between items-baseline flex-wrap gap-x-2">
            <span className="font-semibold">EY (Ernst &amp; Young) — Vietnam</span>
            <span className="text-xs text-gray-500">May 2023 – Mar 2026</span>
          </div>
          <p className="text-sm italic text-gray-500 mb-2">Senior Auditor</p>
          <ul className="list-disc list-outside ml-4 text-sm space-y-1 text-gray-700">
            <li>Lead full audits of key banking processes (credit, treasury, operations). Test how well internal controls are designed and work, against rules and internal policies.</li>
            <li>Write clear audit reports. Present key findings and fixes to senior management, and follow up so problems are solved on time.</li>
            <li>Lead fraud investigations. Agree on goals with clients, ask detailed questions, and build case studies.</li>
            <li>Review key process parts such as policies, approval matrices, and control points.</li>
          </ul>
        </div>

        <div className="mb-5">
          <div className="flex justify-between items-baseline flex-wrap gap-x-2">
            <span className="font-semibold">Vietnam International Bank (VIB) — Hanoi, Vietnam</span>
            <span className="text-xs text-gray-500">Jan 2020 – Apr 2023</span>
          </div>
          <p className="text-sm italic text-gray-500 mb-2">Senior Internal Auditor</p>
          <ul className="list-disc list-outside ml-4 text-sm space-y-1 text-gray-700">
            <li>Plan and run risk-based internal audits across credit, treasury, operations, and branches. Check internal controls, risk management, and compliance (SBV and internal rules).</li>
            <li>Find control gaps and slow processes. Write clear reports with practical advice, and track action plans so fixes happen on time.</li>
            <li>Coach junior auditors during planning and fieldwork. Help with yearly audit planning, risk assessment, and support special reviews for the Audit Committee.</li>
          </ul>
        </div>

        <div className="mb-5">
          <div className="flex justify-between items-baseline flex-wrap gap-x-2">
            <span className="font-semibold">RSM Vietnam — Hanoi, Vietnam</span>
            <span className="text-xs text-gray-500">Jun 2018 – May 2020</span>
          </div>
          <p className="text-sm italic text-gray-500 mb-2">Senior Auditor</p>
          <ul className="list-disc list-outside ml-4 text-sm space-y-1 text-gray-700">
            <li>Lead client audits from start to end — planning, fieldwork, and completion.</li>
            <li>Convert financial statements from VAS to IFRS for FDI clients. Find differences, make adjustments, and decide presentation under IFRS.</li>
            <li>Train and guide associates and interns. Research and solve financial statement and performance issues.</li>
          </ul>
        </div>

        <div className="mb-5">
          <div className="flex justify-between items-baseline flex-wrap gap-x-2">
            <span className="font-semibold">Vietnam National Chemical Group (VINACHEM) — Vientiane, Laos</span>
            <span className="text-xs text-gray-500">Jan 2014 – Feb 2018</span>
          </div>
          <p className="text-sm italic text-gray-500 mb-2">Assistant Project Manager</p>
          <ul className="list-disc list-outside ml-4 text-sm space-y-1 text-gray-700">
            <li>Support a US$322M salt mining and processing project. Prepare reports for VINACHEM and the Ministry of Industry and Trade.</li>
            <li>Prepare budgets and financial plans for site clearance (US$1M). Control project spending under Vietnamese and Lao law.</li>
            <li>Join the team that negotiated the factory construction contract (US$322M). Awarded Excellent Staff of the Year 2014.</li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-baseline flex-wrap gap-x-2">
            <span className="font-semibold">KPMG — Vietnam</span>
            <span className="text-xs text-gray-500">Aug 2011 – Aug 2012</span>
          </div>
          <p className="text-sm italic text-gray-500 mb-2">Audit Associate</p>
          <ul className="list-disc list-outside ml-4 text-sm space-y-1 text-gray-700">
            <li>Audit team member for 15+ clients (manufacturing and FDI). Use general ledger and trial balance to prepare audit data.</li>
            <li>Run audit cycles on key accounts (working capital, fixed assets, financial expenses) under VAS/IFRS.</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-7">
        <h2 className="text-xs font-bold uppercase tracking-widest text-blue-700 border-b border-gray-200 pb-1 mb-4">
          Education
        </h2>

        <div className="mb-3">
          <div className="flex justify-between items-baseline flex-wrap gap-x-2">
            <span className="font-semibold">ACCA</span>
            <span className="text-xs text-gray-500">2017 – 2019</span>
          </div>
          <p className="text-sm italic text-gray-500">Professional Degree, Accountancy</p>
        </div>

        <div className="mb-3">
          <div className="flex justify-between items-baseline flex-wrap gap-x-2">
            <span className="font-semibold">University of Strathclyde, UK</span>
            <span className="text-xs text-gray-500">2012 – 2013</span>
          </div>
          <p className="text-sm italic text-gray-500">MSc, Business Analysis &amp; Consulting (Management Science)</p>
        </div>

        <div>
          <div className="flex justify-between items-baseline flex-wrap gap-x-2">
            <span className="font-semibold">Academy of Finance</span>
            <span className="text-xs text-gray-500">2007 – 2011</span>
          </div>
          <p className="text-sm italic text-gray-500">BSc, Banking and Finance (Corporate Finance)</p>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-7">
        <h2 className="text-xs font-bold uppercase tracking-widest text-blue-700 border-b border-gray-200 pb-1 mb-3">
          Professional Certifications
        </h2>
        <div className="text-sm space-y-1 text-gray-700">
          <p><span className="font-medium">FCCA:</span> Fellow Chartered Certified Accountant — ACCA, United Kingdom</p>
          <p><span className="font-medium">CPA Vietnam:</span> Certified Public Accountant – Auditor</p>
        </div>
      </section>

      {/* Technical Skills & Languages */}
      <section>
        <h2 className="text-xs font-bold uppercase tracking-widest text-blue-700 border-b border-gray-200 pb-1 mb-3">
          Technical Skills &amp; Languages
        </h2>
        <div className="text-sm space-y-1 text-gray-700">
          <p><span className="font-medium">Finance &amp; BI:</span> External Audit · Internal Audit · Management Accounts · Power BI · Excel/VBA</p>
          <p><span className="font-medium">Programming &amp; AI:</span> Python (pandas, automation)</p>
          <p><span className="font-medium">Languages:</span> Vietnamese (Native) · English (Professional Working)</p>
        </div>
      </section>

    </main>
  );
}
