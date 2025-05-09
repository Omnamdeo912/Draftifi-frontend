// import React from 'react';
// import { BrainCircuit, Shield, FileText } from '@heroicons/react/outline';

// export default function LandingPage() {
//   return (
//     <div className="min-h-screen bg-purple-50 text-gray-800">
//       {/* Hero */}
//       <header className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h1 className="text-5xl font-bold text-white">
//             Draftify: AI-Powered Contract Drafting for Junior Lawyers
//           </h1>
//           <p className="mt-4 text-xl text-white">
//             Automate clause suggestions, run real-time compliance checks, and translate legalese into plain English.
//           </p>
//           <a
//             href="/signup"
//             className="mt-8 inline-block bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
//           >
//             Get Started
//           </a>
//         </div>
//       </header>

//       {/* Features */}
//       <section className="py-16">
//         <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300">
//             <BrainCircuit className="h-12 w-12 text-purple-600 mb-4" />
//             <h3 className="text-2xl font-semibold text-purple-700">
//               AI-Assisted Clause Generation
//             </h3>
//             <p className="mt-2 text-gray-600">
//               Receive context-aware, compliant clause suggestions powered by our legal LLM.
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300">
//             <Shield className="h-12 w-12 text-purple-600 mb-4" />
//             <h3 className="text-2xl font-semibold text-purple-700">
//               Compliance & Risk Checks
//             </h3>
//             <p className="mt-2 text-gray-600">
//               Flag ambiguous or non-compliant clauses against the latest Indian regulations.
//             </p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition duration-300">
//             <FileText className="h-12 w-12 text-purple-600 mb-4" />
//             <h3 className="text-2xl font-semibold text-purple-700">
//               Plain-Language Explanations
//             </h3>
//             <p className="mt-2 text-gray-600">
//               Translate dense legal jargon into clear, client-friendly language.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="bg-purple-100 py-16">
//         <div className="max-w-4xl mx-auto px-4 relative">
//           <div className="absolute top-0 left-4 w-0.5 h-full bg-purple-300"></div>
//           {[
//             "Login & Define Requirements",
//             "Select Employment Contract Template",
//             "Get AI-Driven Clauses (LLM + RAG)",
//             "Run Compliance Checks",
//             "Finalize & Download Contract"
//           ].map((step, i) => (
//             <div key={i} className="flex items-start space-x-4 mb-12 relative z-10">
//               <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-lg font-bold">
//                 {i + 1}
//               </div>
//               <div>
//                 <h4 className="text-xl font-semibold text-purple-800">{step}</h4>
//                 <p className="mt-1 text-gray-700">
//                   {step} step in the Draftify workflow.
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16">
//         <div className="max-w-5xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">What Our Users Say</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[
//               { name: "John Doe, Senior Lawyer", text: "Draftify has revolutionized how we draft contracts. It's a game-changer!" },
//               { name: "Jane Smith, Legal Associate", text: "The AI suggestions are spot-on, and the compliance checks save us so much time." }
//             ].map((testimonial, i) => (
//               <div key={i} className="bg-white p-6 rounded-lg shadow">
//                 <p className="text-gray-700">{testimonial.text}</p>
//                 <p className="mt-4 font-semibold text-purple-700">{testimonial.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 bg-purple-50">
//         <div className="max-w-4xl mx-auto text-center px-4">
//           <h2 className="text-3xl font-bold text-purple-800 mb-4">Ready to Transform Your Contract Drafting?</h2>
//           <p className="text-xl text-gray-700 mb-8">Join Draftify today and experience the future of legal technology.</p>
//           <a
//             href="/signup"
//             className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
//           >
//             Get Started
//           </a>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-purple-200 py-8">
//         <div className="max-w-4xl mx-auto text-center text-gray-600">
//           <p>© 2025 Draftify. All rights reserved.</p>
//           <div className="mt-4 space-x-4">
//             <a href="/privacy">Privacy Policy</a>
//             <a href="/terms">Terms of Service</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }