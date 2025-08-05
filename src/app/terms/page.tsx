export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-orange-400">
          Terms & Conditions
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Please read these terms and conditions carefully before using our services.
        </p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-orange-300">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-orange-300">2. Use License</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Automatix&apos;s website for personal, non-commercial transitory viewing only.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-orange-300">3. Disclaimer</h2>
            <p className="text-gray-300 leading-relaxed">
              The materials on Automatix&apos;s website are provided on an &apos;as is&apos; basis. Automatix makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-orange-300">4. Limitations</h2>
            <p className="text-gray-300 leading-relaxed">
              In no event shall Automatix or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Automatix&apos;s website, even if Automatix or a Automatix authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-orange-300">5. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-[#1a1a1a] rounded-lg">
              <p className="text-gray-300">Email: legal@automatix.com</p>
              <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 