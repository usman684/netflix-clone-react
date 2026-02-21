import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './images/logo.png'
import downar from './images/downar.png'
import bird from './images/bird-box.png'
import img3 from './images/img3.png'
import strth from './images/strth.png'
import img4 from './images/img4.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="header">
        <nav>
            <img src={logo} className="logo" />
            <div>
                <button class="language-btn">English <img src={downar} /> </button>
                <button>Sign In</button>
            </div>
        </nav>
        <div class="header-content">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <form class="email-signup">
                <input type="email" placeholder="Email address" required />
                <button type="submit">Get Started</button>
            </form>
        </div>
    </div>

    <div class="features">
        <div class="row">
            <div class="text-col">
                <h2>Enjoy on your TV.</h2>
                <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div class="img-col">
                <img src={bird} />
            </div>
        </div>
    

        <div class="row">
             <div class="img-col">
               <img src={img3} />
            </div>
            <div class="text-col">
                <h2>Download your shows to watch offline.</h2>
                <p>Save your favourites easily and always have something to watch.</p>
            </div>
        </div>

        <div class="row">
            <div class="text-col">
                <h2>Watch everywhere</h2>
                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div class="img-co<l">
                <img src={strth} />
            </div>
        </div>

        <div class="row">
            <div class="img-col">
               <img src={img4} />
            </div>
            <div class="text-col">
                <h2>Create profiles for children.</h2>
                <p>Send children on aadventures with their favourit characters in a space made just for them-free with your membership.</p>
            </div>
        </div>
    </div>

    <div class="faq">
        <h2>Frequently Asked Questions</h2>
        <ul class="accordion">
            <li>
                <input type="radio" name="accordion" id="first" />
                <label for="first">What is Netflix?</label>
                <div class="content">
                    <p>Netflix is a global subscription-based streaming service offering a massive library of TV shows, movies, anime, and documentaries, including original content. It allows users to watch ad-free content on internet-connected devices—such as smart TVs, smartphones, and consoles—for a monthly fee. </p>
                </div>
            </li>

            <li>
                <input type="radio" name="accordion" id="second" />
                <label for="second">How much does Netflix cost?</label>
                <div class="content">
                    <p>As of early 2026, Netflix pricing typically ranges from US$7.99 to US$24.99 per month for standard plans, with variations based on region. Common tiers include Standard with Ads ($7.99), Standard ($17.99), and Premium ($24.99). Costs are sometimes lower in specific regions, such as Pakistan, which has featured some of the lowest subscription rates globally. </p>
                </div>
            </li>

            <li>
                <input type="radio" name="accordion" id="third" />
                <label for="third">Where can I watch?</label>
                <div class="content">
                    <p>You can watch movies and TV shows across various streaming services like Netflix, Prime Video, Disney+, and Hulu. For finding exactly where a specific title is streaming, use services like JustWatch. Other options include free, legal platforms like Plex and YouTube, as well as live TV options on Peacock or Prime Video.</p>
                </div>
            </li>

            <li>
                <input type="radio" name="accordion" id="fourth" />
                <label for="fourth">How do I cancel?</label>
                <div class="content">
                    <p>I recommend trying to log in directly to Netflix.com. After signing in, look for your name, click on it, and you should find the 'Cancel Membership' option there. It's usually straightforward.</p>
                </div>
            </li>

            <li>
                <input type="radio" name="accordion" id="fifth" />
                <label for="fifth">What can I watch on Netflix?</label>
                <div class="content">
                    <p>As of February 8, 2026, the #1 show on Netflix globally is Bridgerton: Season 4, while the top movie appears to be The Rip, though rankings shift daily and can vary by region, with other popular titles like HIS & HERS and KPop Demon Hunters also high on the lists.</p>
                </div>
            </li>

            <li>
                <input type="radio" name="accordion" id="sixth" />
                <label for="sixth">Is Netflix good for kids?</label>
                <div class="content">
                    <p>Netflix is generally good for kids, offering a vast library of age-appropriate content, including exclusive shows, movies, and educational programming. It provides robust, PIN-protected parental controls to filter content by maturity rating and create safe, dedicated profiles for children. However, active supervision is recommended to manage screen time and ensure content suitability.</p>
                </div>
            </li>

        </ul>

        <small>Ready to watch? Enter your email to create or restart your membership.s</small>
        <form class="email-signup">
                <input type="email" placeholder="Email address" required />
                <button type="submit">Get Started</button>
            </form>
    </div>

    <div class="footer">
        <h2>Questions? call 000-000-000-000</h2>

        <div class="row">
            <div class="col">
                <a href="#">FAQ</a>
                <a href="#">Investor Relations</a>
                <a href="#">Privacy</a>
                <a href="#">Speed Test</a>
            </div>

            <div class="col">
                <a href="#">Help Center</a>
                <a href="#">Jobs</a>
                <a href="#">Cookies Preferences</a>
                <a href="#">Legal Notices</a>
            </div>
            <div class="col">
                <a href="#">Account</a>
                <a href="#">Ways to watch</a>
                <a href="#">Corporate Information</a>
                <a href="#">Only on Netflix</a>
            </div>
            <div class="col">
                <a href="#">Media Center</a>
                <a href="#">Terms of Use</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
        <button class="language-btn">English <img src={downar} /></button>
        <p class="copyright-text">Netflix Pakistan</p>
    </div>
    </>
  )
}

export default App
