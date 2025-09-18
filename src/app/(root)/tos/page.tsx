import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Landing from "@/components/Landing";
import Messages from "@/components/Messages";
import Image from "next/image";


export default function TermsOfService() {
    return (
        <div className="backdrop flex items-center justify-center h-screen overflow-hidden">
            <div className="bg h-[100vh] w-[450px] flex flex-col items-center justify-center overflow-hidden">
                <div className="h-full w-full overflow-y-auto flex flex-col items-center text-center text-black">
                    <div className='w-6/7 bg-white border-1 border-black rounded-xl ds mt-5'>
                        <div className="mt-5">
                            <a href="/" className='msg-bg py-2 px-3 text-black border-1 border-black text-sm font-semibold rounded-xl ds cursor-pointer no-underline'>
                                Home
                            </a>
                            <h1 className="text-2xl font-bold mt-3">📜 Terms of Service</h1>
                            <p className="text-md"><span className='bold'>Effective Date:</span> October 1, 2025</p>
                            <p className="text-xs pt-5">Welcome to dontbeblue.club (“we,” “our,” “us”). By using our website and message board (the “Service”), you agree to these Terms of Service. Please read them carefully.</p>
                        </div>
                        <div className="pt-5 w-5/6 mx-auto text-left">
                            <h1 className="text-md font-bold">1. Eligibility</h1>
                            <ul className="text-xs list-disc pl-5">
                                <li>You must be at least 13 years old to use the Service.</li>
                                <li>If you are between 13–18, you must have parental/guardian permission.</li>
                            </ul>
                        </div>
                        <div className="pt-5 w-5/6 mx-auto text-left">
                            <h1 className="text-md font-bold">2. Account Registration</h1>
                            <ul className="text-xs list-disc pl-5">
                                <li>You register by logging in with Google OAuth.</li>
                                <li>We store your Google email and profile picture only for authentication purposes.</li>
                                <li>You are responsible for any activity on your account.</li>
                            </ul>
                        </div>
                        <div className="pt-5 w-5/6 mx-auto text-left">
                            <h1 className="text-md font-bold">3. Acceptable Use</h1>
                            <p className="text-sm">You agree not to:</p>
                            <ul className="text-xs list-disc pl-5">
                                <li>Post unlawful, abusive, defamatory, or hateful content.</li>
                                <li>Impersonate others or misrepresent your identity.</li>
                                <li>Spam, advertise, or share malicious links.</li>
                                <li>Infringe intellectual property rights.</li>
                            </ul>
                            <p className="text-xs">We may remove content or suspend accounts that violate these rules.</p>
                        </div>
                        <div className="pt-5 w-5/6 mx-auto text-left">
                            <h1 className="text-md font-bold">4. Content Ownership</h1>
                            <ul className="text-xs list-disc pl-5">
                                <li>You own the content you post.</li>
                                <li>By posting, you grant us a non-exclusive, worldwide, royalty-free license to display your content on the Service.</li>
                            </ul>
                        </div>
                        <div className="pt-5 w-5/6 mx-auto text-left">
                            <h1 className="text-md font-bold">5. Termination</h1>
                            <ul className="text-xs list-disc pl-5">
                                <li>We reserve the right to suspend or terminate your account if you violate these Terms or misuse the Service.</li>
                            </ul>
                        </div>
                        <div className="pt-5 w-5/6 mx-auto text-left">
                            <h1 className="text-md font-bold">6. Disclaimers</h1>
                            <ul className="text-xs list-disc pl-5">
                                <li>This Service is a fan-created message board and is not affiliated with NewJeans or ADOR.</li>
                                <li>We provide the Service “as is” without warranties.</li>
                                <li>We are not responsible for content posted by users.</li>
                            </ul>
                        </div>
                        <div className="pt-5 w-5/6 mx-auto text-left">
                            <h1 className="text-md font-bold">7. Limitation of Liability</h1>
                            <p className="text-xs">To the maximum extent permitted by law, we are not liable for damages arising from your use of the Service.</p>
                        </div>
                        <div className="pt-5 w-5/6 mx-auto text-left pb-3.5">
                            <h1 className="text-md font-bold">8. Governing Law</h1>
                            <p className="text-xs">These Terms are governed by the laws of the <span className="font-bold">United States</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}