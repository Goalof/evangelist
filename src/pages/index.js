import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section, StackItem, Formspree, Stack } from "@quarkly/components";
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
			padding="80px 0 100px 0"
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
			<Override slot="SectionContent" text-align="center" color="--light" align-items="center" />
			<Image
				width="500px"
				height="500px"
				md-width="300px"
				md-height="300px"
				src="https://test-upl.quarkly.io/5e60efa12db4d10024432a9f/images/contest-results-wreath.svg?v=2020-09-07T13:17:01.317Z"
				margin="0px 0px 24px 0px"
			/>
			<Text text-align="center" font="normal 400 90px/114px --fontFamily-sans" color="#ffffff" margin="16px 0px 0px 0px">
				Мы ищем в команду Quarkly
			</Text>
			<Components.Textloop font="normal 400 90px/114px --fontFamily-sans" slides="IT-Проповедника,IT-Пропагандиста,IT-Evangelista" margin="0px 0px 0px 0px">
				<Override slot="Before Text" display="none" margin="0px 0px 0px 0px" />
				<Override slot="After Text" display="none" margin="0px 0px 0px 0px" />
				<Override slot="Looped Text" color="#66FFE4" font="normal 400 90px/114px --fontFamily-sans" margin="0px 0px 0px 0px" />
			</Components.Textloop>
			<Components.Dots
				position="absolute"
				top="0px"
				bottom="0px"
				left="0px"
				right="0px"
			/>
		</Section>
		<Section background="linear-gradient(180deg, #0E1317 0%, #22262E 100%)" padding="130px 0 130px 0">
			<Stack>
				<StackItem
					width="55%"
					display="flex"
					flex-direction="column"
					padding="16px 0px 16px 16px"
					border-radius="15px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="#22262E"
						padding="26px 26px 26px 36px"
						align-items="center"
						border-radius="12px"
					/>
					<Box width="100%" display="flex" align-items="center" margin="0px 0px 20px 0px">
						<Image width="64px" height="64px" src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Group%20(25).svg?v=2020-11-05T23:46:00.699Z" />
						<Text margin="0px 0px 0px 36px" font="normal 400 44px/66px --fontFamily-sans" color="#ffffff">
							Что нужно делать?
						</Text>
					</Box>
					<Text font="normal 400 25px/37px --fontFamily-googleSourceSansPro" color="#ffffff">
						Выстраивает и поддерживает качественные отношения с лидерами и авторитетами ИТ-сообщества.{" "}
						<br />
						<br />
						Продвигает quarkly, нести ценность в массы.
						<br />
						<br />
						Создавать великолепный контент.{" "}
						<br />
						<br />
						Принимает активное участие в жизни quarkly через блоги, социальные сети, встречи, конференции, форумы и другие мероприятия.{" "}
						<br />
						<br />
						Коммуницировать с блогерами, журналистами и редакторами тематических сайтов.
					</Text>
					{"            "}
				</StackItem>
				<StackItem
					width="45%"
					display="flex"
					flex-direction="column"
					padding="16px 0px 16px 16px"
					border-radius="15px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="#22262E"
						padding="26px 20px 26px 20px"
						align-items="center"
						border-radius="12px"
						justify-content="center"
					/>
					{"        "}
					<Box
						width="100%"
						display="flex"
						align-items="center"
						margin="0px 0px 20px 0px"
						justify-content="center"
					>
						<Image width="64px" height="64px" src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Group%20(25).svg?v=2020-11-05T23:46:00.699Z" />
						<Text margin="0px 0px 0px 36px" font="normal 400 44px/66px --fontFamily-sans" color="#ffffff">
							Обратная связь
						</Text>
					</Box>
					<Text font="normal 400 25px/37px --fontFamily-googleSourceSansPro" color="#ffffff">
						Мы ждем твоего отклика.
					</Text>
					<Formspree errorMessage="Something went wrong" completeText="Success" endpoint="https://formspree.io/f/mpzypyye" width="90%">
						<Input
							display="flex"
							flex-direction="column"
							margin="0px 4px 20px 0px"
							type="text"
							border-radius="8px"
							border-width="1px"
							width="100%"
							height="50px"
							placeholder="NAME"
							border-color="#000000"
							background="#3F4750"
							border-style="solid"
							color="#ffffff"
							font="normal 300 16px/1.5 --fontFamily-sans"
							letter-spacing=".8PX"
							hover-border-color="#66FFE4"
							name="NAME"
						/>
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
							placeholder="EMAIL"
							border-color="#000000"
							background="#3F4750"
							border-style="solid"
							color="#ffffff"
							font="normal 300 16px/1.5 --fontFamily-sans"
							letter-spacing=".8PX"
							hover-border-color="#66FFE4"
							required
						/>
						<Input
							name="Phone"
							display="flex"
							flex-direction="column"
							margin="0px 4px 20px 0px"
							type="text"
							border-radius="8px"
							border-width="1px"
							width="100%"
							height="50px"
							background="#3F4750"
							hover-border-color="#66FFE4"
							color="#ffffff"
							required
							letter-spacing=".8PX"
							placeholder="TELEGRAM"
							border-color="#000000"
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
							border-color="#000000"
							background="#3F4750"
							hover-border-color="#66FFE4"
							color="#ffffff"
							letter-spacing=".8PX"
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
						</Text>
					</Formspree>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Components.Footer />
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