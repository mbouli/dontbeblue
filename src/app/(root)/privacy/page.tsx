import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <div className="backdrop flex items-center justify-center h-screen overflow-hidden">
            <div className="bg h-[100vh] w-[450px] flex flex-col items-center justify-center overflow-hidden">
                <div className="h-full w-full overflow-y-auto flex flex-col items-center text-center text-black">
                    <div className='w-6/7 bg-white border-1 border-black rounded-xl ds mt-5 mb-5'>
                        <div className="mt-5">
                            <Link href="/" className='msg-bg py-2 px-3 text-black border-1 border-black text-sm font-semibold rounded-xl ds cursor-pointer no-underline'>
                                Home
                            </Link>
                            <h1 className="text-2xl font-bold mt-3">🔒 Privacy Policy</h1>
                            <p className="text-md"><span className='bold'>Effective Date:</span> October 1, 2025</p>
                            <p className="text-xs pt-5 w-5/6 mx-auto text-left">Your privacy matters to us. This Privacy Policy explains what information we collect, why we collect it, and how it&apos;s used.</p>
                        </div>
                        <div className="pt-5 w-5/6 mx-auto text-left">
                            <h1 className="text-md font-bold">1. Information We Collect</h1>
                            <p className="text-sm">When you log in using Google OAuth, we collect:</p>
                            <ul className="text-xs list-disc pl-5">
                                <li>Your email address (for authentication)</li>
                                <li>Your Google account ID (for login verification).</li>
                                <li>Supabase stores your profile picture and full name automatically during authentication. However, we do not use it for anything.</li>
                            </ul>
                            <p className="text-sm">We do not collect passwords. Authentication is handled securely via Google.</p>
                        </div>
                        <div className="pt-5 w-5/6 mx-auto text-left">
                            <h1 className="text-md font-bold">2. How We Use Your Information</h1>
                            <p className="text-sm">We use your information to:</p>
                            <ul className="text-xs list-disc pl-5">
                                <li>Authenticate your login.</li>
                                <li>Display your username in the message board.</li>
                                <li>Maintain the security of your account.</li>
                            </ul>
                            <p className="text-sm">We do not sell, rent, or share your information with advertisers.</p>
                        </div>
                        <div className="pt-5 w-5/6 mx-auto text-left">
                            <h1 className="text-md font-bold">3. Data Storage</h1>
                            <ul className="text-xs list-disc pl-5">
                                <li>Your data is stored securely on Supabase servers.</li>
                                <li>We rely on Supabase&apos;s privacy and security measures to protect your information.</li>
                            </ul>
                        </div>
                        <div className="pt-5 w-5/6 mx-auto text-left">
                            <h1 className="text-md font-bold">4. Sharing of Information</h1>
                            <p className="text-sm">We may disclose your information only:</p>
                            <ul className="text-xs list-disc pl-5">
                                <li>If required by law (e.g., legal requests).</li>
                                <li>To protect the safety of the community.</li>
                            </ul>
                        </div>
                        <div className="pt-5 w-5/6 mx-auto text-left">
                            <h1 className="text-md font-bold">5. Cookies</h1>
                            <p className="text-sm">We use cookies for login sessions. No tracking or advertising cookies are used.</p>
                        </div>
                        <div className="pt-5 w-5/6 mx-auto text-left">
                            <h1 className="text-md font-bold">6. Your Rights</h1>
                            <p className="text-sm">Depending on your location, you may have rights to:</p>
                            <ul className="text-xs list-disc pl-5">
                                <li>Request access to your data.</li>
                                <li>Request deletion of your account and associated data.</li>
                                <li>Contact us (clubdontbeblue@gmail.com) to exercise these rights.</li>
                            </ul>
                        </div>
                        <div className="pt-5 w-5/6 mx-auto text-left">
                            <h1 className="text-md font-bold">7. Children&apos;s Privacy</h1>
                            <p className="text-xs">This Service is intended for users 13 and older. If we learn we&apos;ve collected information from a child under 13, we will delete it.</p>
                        </div>
                        <div className="pt-5 w-5/6 mx-auto text-left">
                            <h1 className="text-md font-bold">8. Changes to this Policy</h1>
                            <p className="text-xs">We may update this Policy from time to time. We&apos;ll notify users of major changes.</p>
                        </div>
                        <div className="pt-5 w-5/6 mx-auto text-left pb-5">
                            <h1 className="text-md font-bold">9. Contact Us</h1>
                            <p className="text-xs">If you have questions about this Privacy Policy, contact us at:</p>
                            <p className="text-sm">📧 clubdontbeblue@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}