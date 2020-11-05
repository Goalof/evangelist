import React from "react";
import theme from "theme";
import { Theme, Link, Input, Button, Text, Image, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Formspree, StackItem, SocialMedia, Stack, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="#0E1317" padding="50px 0 50px 0">
			<Stack>
				{"    "}{"    "}
				<StackItem width="50%" display="flex" flex-direction="column" padding="16px 0px 16px 16px">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="#22262E"
						padding="36px 36px"
						border-radius="12px"
						align-items="center"
					/>
					{"        "}
					<Formspree errorMessage="Something went wrong" completeText="Success" endpoint="{   constructor(props) {     super(props);     this.submitForm = this.submitForm.bind(this);     this.state = {       status: &quot;&quot;     };   }    render() {     const { status } = this.state;     return (       <form         onSubmit={this.submitForm}         action=&quot;https://formspree.io/xvowynqa&quot;         method=&quot;POST&quot;       >         <!-- add your custom form HTML here -->         <label>Email:</label>         <input type=&quot;email&quot; name=&quot;email&quot; />         <label>Message:</label>         <input type=&quot;text&quot; name=&quot;message&quot; />         {status === &quot;SUCCESS&quot; ? <p>Thanks!</p> : <button>Submit</button>}         {status === &quot;ERROR&quot; && <p>Ooops! There was an error.</p>}       </form>     );   }    submitForm(ev) {     ev.preventDefault();     const form = ev.target;     const data = new FormData(form);     const xhr = new XMLHttpRequest();     xhr.open(form.method, form.action);     xhr.setRequestHeader(&quot;Accept&quot;, &quot;application/json&quot;);     xhr.onreadystatechange = () => {       if (xhr.readyState !== XMLHttpRequest.DONE) return;       if (xhr.status === 200) {         form.reset();         this.setState({ status: &quot;SUCCESS&quot; });       } else {         this.setState({ status: &quot;ERROR&quot; });       }     };     xhr.send(data);   } }" width="70%">
						<Input
							name="EMAIL"
							display="flex"
							flex-direction="column"
							margin="0px 4px 20px 0px"
							type="email"
							border-radius="8px"
							border-width="1px"
							width="100%"
							height="50px"
							placeholder="✉ EMAIL"
							border-color="--color-light"
							background="rgba(255, 255, 255, 0)"
							border-style="solid"
							color="#ffffff"
							font="normal 300 16px/1.5 --fontFamily-sans"
							letter-spacing="0.3PX"
							hover-border-color="#66FFE4"
						/>
						<Input
							name="Phone"
							display="flex"
							flex-direction="column"
							margin="0px 4px 20px 0px"
							type="tel"
							border-radius="8px"
							border-width="1px"
							width="100%"
							height="50px"
							placeholder="☎ PHONE"
							background="rgba(255, 255, 255, 0)"
							hover-border-color="#66FFE4"
							color="#ffffff"
						/>
						<Input
							name="Email"
							display="flex"
							flex-direction="column"
							margin="0px 4px 20px 0px"
							type="text"
							border-radius="8px"
							border-width="1px"
							width="100%"
							height="150px"
							placeholder="✐ COMMENTS"
							align-items="flex-start"
							justify-content="start"
							as="textarea"
							border-color="--color-light"
							background="rgba(255, 255, 255, 0)"
							hover-border-color="#66FFE4"
							color="#ffffff"
						/>
						<Button
							display="flex"
							background="#66FFE4"
							font="normal 600 18px/1.5 --fontFamily-googleSourceSansPro"
							letter-spacing="2px"
							border-radius="8px"
							padding="11px 42px"
							color="#000000"
							text-align="center"
							width="100%"
							justify-content="center"
							hover-background="#000000"
							hover-color="#ffffff"
							transition="all 0.3s ease"
						>
							SEND
						</Button>
						<Text font="17px --fontFamily-googleSourceSansPro" color="--light" text-align="center">
							By clicking the “SEND” button, you confirm that you have read and agree to the{" "}
							<Link
								href="https://quarkly.io/contest-terms"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="#66FFE4"
							>
								Contest Rules
							</Link>
							{"\n\n"}
						</Text>
					</Formspree>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" flex-direction="column">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="#22262E"
						padding="36px 36px"
						border-radius="12px"
						align-items="center"
						justify-content="center"
					/>
					<Image width="100px" height="90px" src="https://image.flaticon.com/icons/svg/684/684927.svg" margin="0px 0px 10px 0px" />
					<Text color="#ffffff" font="700 40px --fontFamily-googleSourceSansPro" letter-spacing="4px" margin="16px 0px 10px 0px">
						CONTACT US
					</Text>
					<Box margin="0px 0px 30px 0px">
						<Text font="500 30px --fontFamily-googleSourceSansPro" color="#ffffff">
							<Link href="malito:ADMIN@QUARKLY.COM" color="#66FFE4" text-decoration-line="initial" hover-text-decoration-line="underline">
								ADMIN@QUARKLY.COM
							</Link>
						</Text>
					</Box>
					<SocialMedia
						facebook="https://www.facebook.com/quarklyapp/"
						twitter="https://twitter.com/quarklyapp"
						youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
						vkontakte="https://vk.com/quarklyapp"
						telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
					>
						<Override slot="icon" color="#66FFE4" />
						<Override slot="link" background="rgba(237, 242, 246, 0)" hover-background="rgba(237, 242, 246, 0)" />
					</SocialMedia>
					{"        "}{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});