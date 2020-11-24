import React from "react";
import theme from "theme";
import { Theme, Link, Span, Text, Image, Box, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Formspree, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.EmbedHTML />
		<Section
			text-align="left"
			padding="40px 0 40px 0"
			background-image="linear-gradient(0deg, #0E1317 0%, #22262E 100%)"
			lg-text-align="left"
			position="relative"
			overflow="hidden"
			sm-padding="50px 0 70px 0"
			sm-text-align="center"
			quarkly-title="Hero"
			lg-padding="60px 0 80px 0"
			md-padding="40px 0 60px 0"
		>
			<Override slot="SectionContent" text-align="center" color="--light" />
			<Text
				text-align="center"
				font="normal 400 70px/91px --fontFamily-sans"
				color="#ffffff"
				margin="0px 0px 0px 0px"
				lg-font="normal 400 60px/70px --fontFamily-sans"
				md-font="normal 400 40px/70px --fontFamily-sans"
				sm-font="normal 400 24px/30px --fontFamily-sans"
				position="relative"
				z-index="2"
			>
				Мы ищем в команду Quarkly{" "}
				<br />
				<Span color="--secondary">
					IT-Evangelista
				</Span>
			</Text>
			<Stack margin="30px -16px -16px -16px">
				<StackItem
					width="100%"
					display="flex"
					flex-direction="column"
					padding="16px 0px 16px 16px"
					border-radius="15px"
					lg-width="100%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="#22262E"
						padding="36px 36px 36px 36px"
						align-items="center"
						border-radius="12px"
						justify-content="center"
					/>
					{"        "}
					<Box
						width="100%"
						display="flex"
						align-items="center"
						margin="0px 0px 15px 0px"
						justify-content="flex-start"
					>
						<Image
							width="57px"
							height="57px"
							src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Group%20(26).svg?v=2020-11-06T01:01:26.395Z"
							border-radius="50%"
							padding="10px 10px 10px 10px"
							background="#FFFFFF"
							margin="0px 0px 0px 22px"
						/>
						<Text margin="-10px 0px 0px 36px" font="normal 400 38px/66px --fontFamily-sans" color="#ffffff" sm-font="normal 500 26px/30px --fontFamily-sans">
							Обратная связь
						</Text>
					</Box>
					<Formspree
						errorMessage="Something went wrong"
						completeText="Success"
						endpoint="xeqpgrlv"
						width="90%"
						color="#ffffff"
					>
						<Input
							display="flex"
							flex-direction="column"
							margin="0px 4px 20px 0px"
							type="text"
							border-radius="6px"
							border-width="0px"
							width="100%"
							height="50px"
							placeholder="Name"
							border-color="#000000"
							background="#3F4750"
							border-style="solid"
							color="#ffffff"
							font="normal 300 16px/1.5 --fontFamily-sans"
							letter-spacing=".8PX"
							hover-border-color="#66FFE4"
							name="Name"
							hover-border-width="1px"
						/>
						<Input
							name="Email"
							display="flex"
							flex-direction="column"
							margin="0px 4px 20px 0px"
							type="email"
							border-radius="6px"
							border-width="0px"
							width="100%"
							height="50px"
							placeholder="Email"
							border-color="#000000"
							background="#3F4750"
							border-style="solid"
							color="#ffffff"
							font="normal 300 16px/1.5 --fontFamily-sans"
							letter-spacing=".8PX"
							hover-border-color="#66FFE4"
							required
							hover-border-width="1px"
						/>
						<Input
							name="Telegram"
							display="flex"
							flex-direction="column"
							margin="0px 4px 20px 0px"
							type="text"
							border-radius="6px"
							border-width="0px"
							width="100%"
							height="50px"
							background="#3F4750"
							hover-border-color="#66FFE4"
							color="#ffffff"
							required
							letter-spacing=".8PX"
							placeholder="Phone or IM Phone/Messenger"
							border-color="#000000"
							hover-border-width="1px"
						/>
						<Input
							name="Message"
							display="flex"
							flex-direction="column"
							margin="0px 4px 20px 0px"
							type="text"
							border-radius="6px"
							border-width="0px"
							width="100%"
							height="100px"
							placeholder="Message"
							align-items="flex-start"
							justify-content="start"
							as="textarea"
							border-color="#000000"
							background="#3F4750"
							hover-border-color="#66FFE4"
							color="#ffffff"
							letter-spacing=".8PX"
							hover-border-width="1px"
							padding="10px 16px 6px 16px"
						/>
						<Button
							display="flex"
							font="normal 600 18px/1.5 --fontFamily-googleSourceSansPro"
							letter-spacing="2px"
							border-radius="6px"
							padding="17px 82px 17px 82px"
							color="#000000"
							text-align="center"
							justify-content="center"
							hover-background="#000000"
							hover-color="#ffffff"
							transition="all 0.3s ease"
							background="--color-secondary"
							width="100%"
						>
							SEND
						</Button>
					</Formspree>
					{"    "}
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					flex-direction="column"
					padding="16px 0px 16px 16px"
					border-radius="15px"
					lg-width="100%"
					position="relative"
					z-index="9"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="#22262E"
						padding="26px 26px 26px 36px"
						border-radius="12px"
						align-items="flex-start"
					/>
					<Box width="100%" display="flex" align-items="center" margin="0px 0px 20px 0px">
						<Image width="57px" height="57px" src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(8).svg?v=2020-11-06T00:37:40.225Z" />
						<Text margin="2px 0px 0px 36px" font="normal 400 38px/66px --fontFamily-sans" color="#ffffff" sm-font="normal 500 26px/30px --fontFamily-sans">
							We expect you to:
						</Text>
					</Box>
					<Box display="flex" justify-content="flex-start" margin="0px 0px 0px 20px">
						<Image
							src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(7).svg?v=2020-11-06T00:32:44.685Z"
							margin="0px 21px 0px 0px"
							sm-margin="-57px 21px 0px 0px"
							md-margin="-57px 21px 0px 0px"
							width="16px"
						/>
						<Text font="normal 400 20px/30px --fontFamily-googleSourceSansPro" color="#ffffff" margin="20px 0px 20px 0px" text-align="left">
							Love Quarkly as much as we do
						</Text>
					</Box>
					<Box display="flex" justify-content="center" margin="0px 0px 0px 20px">
						<Image src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(7).svg?v=2020-11-06T00:32:44.685Z" margin="-27px 21px 0px 0px" width="16px" sm-margin="-58px 21px 0px 0px" />
						<Text font="normal 400 20px/30px --fontFamily-googleSourceSansPro" color="#ffffff" margin="20px 0px 20px 0px" text-align="left">
							Build relationships with professional community and opinion makers
						</Text>
					</Box>
					<Box display="flex" justify-content="center" margin="0px 0px 0px 20px">
						<Image
							src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(7).svg?v=2020-11-06T00:32:44.685Z"
							margin="0px 21px 0px 0px"
							width="16px"
							sm-margin="-88px 21px 0px 0px"
							md-margin="-57px 21px 0px 0px"
						/>
						<Text font="normal 400 20px/30px --fontFamily-googleSourceSansPro" color="#ffffff" margin="20px 0px 20px 0px" text-align="left">
							Lead our developer relations
						</Text>
					</Box>
					{"            "}
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					flex-direction="column"
					padding="16px 0px 16px 16px"
					border-radius="15px"
					lg-width="100%"
					position="relative"
					z-index="9"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="#22262E"
						padding="26px 26px 26px 36px"
						border-radius="12px"
						align-items="flex-start"
					/>
					<Box width="100%" display="flex" align-items="center" margin="0px 0px 20px 0px">
						<Image width="57px" height="57px" src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(8).svg?v=2020-11-06T00:37:40.225Z" />
						<Text margin="2px 0px 0px 36px" font="normal 400 38px/66px --fontFamily-sans" color="#ffffff" sm-font="normal 500 26px/30px --fontFamily-sans">
							Work with us:
						</Text>
					</Box>
					<Box display="flex" justify-content="flex-start" margin="0px 0px 0px 20px">
						<Image
							src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(7).svg?v=2020-11-06T00:32:44.685Z"
							margin="-27px 21px 0px 0px"
							sm-margin="-57px 21px 0px 0px"
							md-margin="-57px 21px 0px 0px"
							width="16px"
						/>
						<Text font="normal 400 20px/30px --fontFamily-googleSourceSansPro" color="#ffffff" margin="20px 0px 20px 0px" text-align="left">
							We are a startup - you will make a difference with us and shape the future for Quarkly
						</Text>
					</Box>
					<Box display="flex" justify-content="center" margin="0px 0px 0px 20px">
						<Image src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(7).svg?v=2020-11-06T00:32:44.685Z" margin="-27px 21px 0px 0px" width="16px" sm-margin="-58px 21px 0px 0px" />
						<Text font="normal 400 20px/30px --fontFamily-googleSourceSansPro" color="#ffffff" margin="20px 0px 20px 0px" text-align="left">
							That means we are also flexible in everything - both part-time and full-time options are available
						</Text>
					</Box>
					{"            "}
				</StackItem>
				{"        "}
			</Stack>
			<Components.Dots
				position="absolute"
				top="0px"
				bottom="0px"
				left="0px"
				right="0px"
			/>
		</Section>
		<Components.Footer>
			<Override slot="stackItem2">
				<Override slot="StackItemContent" font="16px --fontFamily-googleSourceSansPro" />
			</Override>
		</Components.Footer>
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