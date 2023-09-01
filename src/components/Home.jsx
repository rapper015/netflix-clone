
import { motion } from "framer-motion"
import { useState } from "react"
export default function Home() {
	const [acordian,setAcordian]=useState(null)
	const [email,setEmail]=useState("");
	const [error,setError]=useState(true);
	const validation =(e)=>{
		var pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
		var emailvalue=e.target.value;
		setEmail(emailvalue);
		if(email.match(pattern)){
			setError(true);
		}
		else{
			setError(false);
		}
	}
	const toggle=i=>{
		if(acordian==i){
			return setAcordian(null)
		}
		setAcordian(i)
	}
	const data=[
		{
		question:'What is Netlix?',
		answer:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
	},
	{
		question:"How much does Netflix cost?",
		answer:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
	},
	{
		question:"Where can I watch?",
		answer:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
	},
	{
		question:"How do I cancel?",
		answer:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
	},
	{
		question:"What can I watch on Netflix?",
		answer:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
	},
	{
		question:"Is Netflix good for kids?",
		answer:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
	}
]
  return (
	<div>
		<div className="home container">
			<div className="home_main">
				<div className="home_main_content">
						<div id="content_text" className="home_main_content_left">
								<h1>Enjoy on your TV</h1>
								<p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
						</div>
						<div id="content_image" className="home_main_content_right">
								<img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
								<video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoPlay playsInline muted loop></video>
						</div>
				</div>
			</div>
			<div className="home_main">
				<div className="home_main_content">
						<div id="content_image" className="home_main_content_right">
								<img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
								<div className="download">
									<div className="download_img">
										<img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt=""/>
									</div>
									<p><b>Stranger Things</b><span> Downloading...</span></p>
									<div className="download_img">
										<img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
									</div>
								</div>
						</div>
						<div id="content_text" className="home_main_content_left">
								<h1>Download your shows to watch offline</h1>
								<p>Save your favourites easily and always have something to watch.</p>
						</div>
				</div>
			</div>
			<div className="home_main">
				<div className="home_main_content">
						<div id="content_text" className="home_main_content_left">
								<h1>Watch everywhere</h1>
								<p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
						</div>
						<div id="content_image_sp" className="home_main_content_right">
								<img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" />
								<video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" autoPlay playsInline muted loop></video>
						</div>
				</div>
			</div>
			<div className="home_main">
				<div className="home_main_content">
						<div id="content_image" className="home_main_content_right">
								<img src="https://occ-0-2232-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="" />
						</div>
						<div id="content_text" className="home_main_content_left">
								<h1>Create profiles for kids</h1>
								<p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
						</div>
				</div>
			</div>
			<div className="home_main_faq">
				<div className="home_main_content_faq">
						<h1>Frequently Asked Questions</h1>
						<div className="acordian_faq">
							{data.map((item,i)=>{
								return(
								<div key={item.question} className="acordian_faq_main">
									<div className="acordian_faq_main_title" onClick={()=>toggle(i)}>
										<p>{item.question}</p>
										<i className={acordian==i?"fa-solid fa-xmark":"fa-solid fa-plus"}></i>
									</div>
									<motion.div  animate={{height:acordian==i?"auto":0}} className="acordian_faq_main_content">
										<p>{item.answer}</p>
									</motion.div>
							</div>
								)
								
							})}
							
						</div>
						<div className="navbar_info" >
				<p>Ready to watch? Enter your email to create or restart your membership.</p>
				<div className="navbar_info_getstarted">
					<input type="text" name="email" required onChange={validation} value={email} autoComplete="off"/>
					<label htmlFor="email" className="label_email">Email address</label>
					<button>Get Started<i className="fa-solid fa-chevron-right"></i></button>
					<p className={error? "display_none":""}><i className="fa-regular fa-circle-xmark"></i>Please enter a valid email address.</p>
				</div>
		</div>
				</div>
				
			</div>
			
		</div>
	</div>
  )
}
