import Link from "next/link"

export default function TermsAndConditionsPage() {
  return (
    <div className="container space-y-5 py-20">
      <div className="font-montserrat font-bold">
        Terms and Conditions for The Cooked Sisters
      </div>
      <ul className="space-y-5">
        <li className="mb-1">1. Acceptance of Terms</li>
        By accessing and using the website of The Cooked Sisters, you agree to
        comply with and be bound by the following terms and conditions. If you
        do not agree with these terms, please refrain from using our website.
        <li className="mb-1">2. Use of the Website</li>
        You agree to use this website for lawful purposes only and in a manner
        consistent with all applicable local, national, and international laws
        and regulations.
        <li className="mb-1">3. Intellectual Property</li>
        All content on this website, including but not limited to text, images,
        logos, and design, is the property of The Cooked Sisters and is
        protected by intellectual property laws. You may not reproduce,
        distribute, or use any content from this site without our express
        written permission.
        <li className="mb-1">4. Accuracy of Information</li>
        We strive to provide accurate and up-to-date information on our website.
        However, The Cooked Sisters cannot guarantee the accuracy, completeness,
        or timeliness of the information provided. We reserve the right to make
        changes to the content without notice.
        <li className="mb-1">5. Third-Party Links</li>
        This website may contain links to third-party websites for your
        convenience. The Cooked Sisters is not responsible for the content or
        practices of these external sites and does not endorse or make any
        representations about them. Your use of third-party websites is at your
        own risk.
        <li className="mb-1">6. User Submissions</li>
        By submitting any content (such as reviews, comments, or testimonials)
        to The Cooked Sisters through the website, you grant us a non-exclusive,
        royalty-free, perpetual, irrevocable, and fully sublicensable right to
        use, reproduce, modify, adapt, publish, translate, create derivative
        works from, distribute, and display such content worldwide.
        <li className="mb-1">7. Limitation of Liability</li>
        To the extent permitted by law, The Cooked Sisters shall not be liable
        for any direct, indirect, incidental, consequential, or punitive damages
        arising out of your access to, use of, or inability to use this website.
        <li className="mb-1">8. Governing Law</li>
        These terms and conditions are governed by and construed in accordance
        with the laws of The Republic of South Africa. Any disputes arising
        under or in connection with these terms shall be subject to the
        exclusive jurisdiction of the courts in of The Republic of South Africa.
        <li className="mb-1">9. Changes to Terms and Conditions</li>
        The Cooked Sisters reserves the right to modify or replace these terms
        and conditions at any time. It is your responsibility to check this page
        periodically for changes. Your continued use of the website after any
        changes constitutes acceptance of those changes.
      </ul>
      <div className="font-montserrat font-bold">Contact Us</div>
      If you have any questions regarding these terms and conditions, please
      contact us at{" "}
      <span>
        <Link href="mailto:thecookedsisters@gmail.com">
          thecookedsisters@gmail.com
        </Link>
      </span>{" "}
      <div className="pt-1">Last updated: 22 November 2023</div>
    </div>
  )
}
