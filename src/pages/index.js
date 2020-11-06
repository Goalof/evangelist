import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Input, Button, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Formspree, Stack, Section } from "@quarkly/components";
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
		<Components.Popup>
			<Override slot="button" width="100%" background="#0E1317">
				Evangelist is wanted 🤗
			</Override>
			<Stack margin="10px 10px 18px 10px" gap="16px">
				<StackItem
					width="55%"
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
						padding="26px 26px 26px 36px"
						align-items="flex-start"
						border-radius="12px"
						justify-content="flex-start"
					/>
					<Box width="100%" display="flex" align-items="center" margin="0px 0px 20px 0px">
						<Image width="48px" height="48px" src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(8).svg?v=2020-11-06T00:37:40.225Z" />
						<Text margin="2px 0px 0px 36px" font="normal 400 28px/66px --fontFamily-sans" color="#ffffff" sm-font="normal 500 26px/30px --fontFamily-sans">
							Что нужно делать?
						</Text>
					</Box>
					<Box display="flex" align-items="center" justify-content="flex-start" margin="0px 0px 0px 20px">
						<Image src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(7).svg?v=2020-11-06T00:32:44.685Z" margin="-27px 21px 0px 0px" sm-margin="-57px 21px 0px 0px" md-margin="-57px 21px 0px 0px" />
						<Text font="normal 400 18px/30px --fontFamily-googleSourceSansPro" color="#ffffff" margin="20px 0px 20px 0px">
							Выстраивает и поддерживает качественные отношения с лидерами и авторитетами ИТ-сообщества.{" "}
						</Text>
					</Box>
					<Box display="flex" align-items="center" justify-content="center" margin="0px 0px 0px 20px">
						<Image src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(7).svg?v=2020-11-06T00:32:44.685Z" margin="-27px 21px 0px 0px" width="16px" sm-margin="-58px 21px 0px 0px" />
						<Text font="normal 400 18px/30px --fontFamily-googleSourceSansPro" color="#ffffff" margin="20px 0px 20px 0px">
							Продвигает quarkly, нести ценность в массы и создавать великолепный контент.{" "}
							<br />
						</Text>
					</Box>
					<Box display="flex" align-items="center" justify-content="center" margin="0px 0px 0px 20px">
						<Image
							src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(7).svg?v=2020-11-06T00:32:44.685Z"
							margin="-27px 21px 0px 0px"
							width="16px"
							sm-margin="-88px 21px 0px 0px"
							md-margin="-57px 21px 0px 0px"
						/>
						<Text font="normal 400 18px/30px --fontFamily-googleSourceSansPro" color="#ffffff" margin="20px 0px 20px 0px">
							Принимает активное участие в жизни quarkly через блоги, социальные сети, встречи, конференции, форумы и другие.
						</Text>
					</Box>
					<Box display="flex" align-items="center" justify-content="center" margin="0px 0px 0px 20px">
						<Image
							src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(7).svg?v=2020-11-06T00:32:44.685Z"
							margin="-27px 21px 0px 0px"
							width="16px"
							sm-margin="-57px 21px 0px 0px"
							md-margin="-57px 21px 0px 0px"
						/>
						<Text font="normal 400 18px/30px --fontFamily-googleSourceSansPro" color="#ffffff" margin="20px 0px 20px 0px">
							Коммуницировать с блогерами, журналистами и редакторами тематических сайтов.
						</Text>
					</Box>
					{"            "}
				</StackItem>
				<StackItem
					width="45%"
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
						padding="26px 26px 26px 20px"
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
						justify-content="center"
					>
						<Image
							width="48px"
							height="48px"
							src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Group%20(26).svg?v=2020-11-06T01:01:26.395Z"
							border-radius="50%"
							padding="10px 10px 10px 10px"
							background="#FFFFFF"
						/>
						<Text margin="-10px 0px 0px 36px" font="normal 400 28px/66px --fontFamily-sans" color="#ffffff" sm-font="normal 500 26px/30px --fontFamily-sans">
							Обратная связь
						</Text>
					</Box>
					<Text font="normal 400 20px/30px --fontFamily-googleSourceSansPro" color="#ffffff" margin="8px 0px 16px 0px">
						Мы ждем твоего отклика!
					</Text>
					<Formspree errorMessage="Something went wrong" completeText="Success" endpoint="https://formspree.io/f/mpzypyye" width="90%">
						<Input
							display="flex"
							flex-direction="column"
							margin="0px 4px 20px 0px"
							type="text"
							border-radius="6px"
							border-width="0px"
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
							hover-border-width="1px"
						/>
						<Input
							name="EMAIL"
							display="flex"
							flex-direction="column"
							margin="0px 4px 20px 0px"
							type="email"
							border-radius="6px"
							border-width="0px"
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
							hover-border-width="1px"
						/>
						<Input
							name="Phone"
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
							placeholder="TELEGRAM"
							border-color="#000000"
							hover-border-width="1px"
						/>
						<Input
							name="Email"
							display="flex"
							flex-direction="column"
							margin="0px 4px 20px 0px"
							type="text"
							border-radius="6px"
							border-width="0px"
							width="100%"
							height="100px"
							placeholder="✐ COMMENTS"
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
							border-radius="50px"
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
						<Text font="12px/23px --fontFamily-googleSourceSansPro" color="rgba(247, 251, 255, 0.68)" width="100%">
							By clicking the “SEND” button, you confirm that you have read and agree to the{" "}
							<Link
								href="https://quarkly.io/contest-terms"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="--secondary"
							>
								Contest Rules
							</Link>
						</Text>
					</Formspree>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
		</Components.Popup>
		<Section
			text-align="left"
			padding="60px 0 60px 0"
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
				width="350px"
				height="350px"
				md-width="300px"
				md-height="300px"
				src="https://uploads.quarkly.io/landing/q-sheme-logo.svg"
				margin="0px 0px 40px 0px"
			/>
			<Text
				text-align="center"
				font="normal 400 70px/61px --fontFamily-sans"
				color="#ffffff"
				margin="16px 0px 0px 0px"
				lg-font="normal 400 60px/70px --fontFamily-sans"
				md-font="normal 400 40px/70px --fontFamily-sans"
				sm-font="normal 400 24px/30px --fontFamily-sans"
			>
				Мы ищем в команду Quarkly
			</Text>
			<Components.Textloop
				font="normal 400 90px/114px --fontFamily-sans"
				slides="IT-Проповедника,IT-Пропагандиста,IT-Evangelista"
				margin="0px 0px 0px 0px"
				lg-font="normal 400 50px/0px --fontFamily-sans"
				sm-font="normal 400 21px/0px --fontFamily-sans"
			>
				<Override slot="Before Text" display="none" margin="0px 0px 0px 0px" />
				<Override slot="After Text" display="none" margin="0px 0px 0px 0px" />
				<Override
					slot="Looped Text"
					color="#66FFE4"
					font="normal 400 80px/69px --fontFamily-sans"
					margin="0px 0px 0px 0px"
					lg-font="normal 400 70px/0px --fontFamily-sans"
					md-font="normal 400 50px/0px --fontFamily-sans"
					sm-font="normal 400 30px/0px --fontFamily-sans"
				/>
			</Components.Textloop>
			<Components.Dots
				position="absolute"
				top="0px"
				bottom="0px"
				left="0px"
				right="0px"
			/>
		</Section>
		<Section background="linear-gradient(180deg, #0E1317 0%, #22262E 100%)" padding="70px 0 0px 0">
			<Stack align-items="flex-start">
				<StackItem
					width="55%"
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
						padding="26px 26px 26px 36px"
						align-items="flex-start"
						border-radius="12px"
						justify-content="flex-start"
					/>
					<Box width="100%" display="flex" align-items="center" margin="0px 0px 20px 0px">
						<Image width="57px" height="57px" src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(8).svg?v=2020-11-06T00:37:40.225Z" />
						<Text margin="2px 0px 0px 36px" font="normal 400 38px/66px --fontFamily-sans" color="#ffffff" sm-font="normal 500 26px/30px --fontFamily-sans">
							Что нужно делать?
						</Text>
					</Box>
					<Box display="flex" align-items="center" justify-content="flex-start" margin="0px 0px 0px 20px">
						<Image src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(7).svg?v=2020-11-06T00:32:44.685Z" margin="-27px 21px 0px 0px" sm-margin="-57px 21px 0px 0px" md-margin="-57px 21px 0px 0px" />
						<Text font="normal 400 20px/30px --fontFamily-googleSourceSansPro" color="#ffffff" margin="20px 0px 20px 0px">
							Выстраивает и поддерживает качественные отношения с лидерами и авторитетами ИТ-сообщества.{" "}
						</Text>
					</Box>
					<Box display="flex" align-items="center" justify-content="center" margin="0px 0px 0px 20px">
						<Image src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(7).svg?v=2020-11-06T00:32:44.685Z" margin="-27px 21px 0px 0px" width="16px" sm-margin="-58px 21px 0px 0px" />
						<Text font="normal 400 20px/30px --fontFamily-googleSourceSansPro" color="#ffffff" margin="20px 0px 20px 0px">
							Продвигает quarkly, нести ценность в массы и создавать великолепный контент.{" "}
							<br />
						</Text>
					</Box>
					<Box display="flex" align-items="center" justify-content="center" margin="0px 0px 0px 20px">
						<Image
							src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(7).svg?v=2020-11-06T00:32:44.685Z"
							margin="-27px 21px 0px 0px"
							width="16px"
							sm-margin="-88px 21px 0px 0px"
							md-margin="-57px 21px 0px 0px"
						/>
						<Text font="normal 400 20px/30px --fontFamily-googleSourceSansPro" color="#ffffff" margin="20px 0px 20px 0px">
							Принимает активное участие в жизни quarkly через блоги, социальные сети, встречи, конференции, форумы и другие.
						</Text>
					</Box>
					<Box display="flex" align-items="center" justify-content="center" margin="0px 0px 0px 20px">
						<Image
							src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(7).svg?v=2020-11-06T00:32:44.685Z"
							margin="-27px 21px 0px 0px"
							width="16px"
							sm-margin="-57px 21px 0px 0px"
							md-margin="-57px 21px 0px 0px"
						/>
						<Text font="normal 400 20px/30px --fontFamily-googleSourceSansPro" color="#ffffff" margin="20px 0px 20px 0px">
							Коммуницировать с блогерами, журналистами и редакторами тематических сайтов.
						</Text>
					</Box>
					{"            "}
				</StackItem>
				<StackItem
					width="45%"
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
						padding="26px 36px 26px 36px"
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
					<Text font="normal 400 20px/30px --fontFamily-googleSourceSansPro" color="#ffffff" margin="8px 0px 16px 0px">
						Мы ждем твоего отклика!
					</Text>
					<Formspree errorMessage="Something went wrong" completeText="Success" endpoint="xeqpgrlv" width="90%">
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
							placeholder="Telegram username"
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
							border-radius="50px"
							padding="17px 82px 17px 82px"
							color="#000000"
							text-align="center"
							justify-content="center"
							hover-background="#000000"
							hover-color="#ffffff"
							transition="all 0.3s ease"
							background="--color-secondary"
						>
							SEND
						</Button>
						<Text font="16px/23px --fontFamily-googleSourceSansPro" color="rgba(247, 251, 255, 0.68)" width="70%">
							By clicking the “SEND” button, you confirm that you have read and agree to the{" "}
							<Link
								href="https://quarkly.io/contest-terms"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								color="--secondary"
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
		<Section
			text-align="left"
			padding="0px 0 70px 0"
			background-color="--light"
			font-weight="300"
			position="relative"
			md-padding-top="50px"
			md-padding-bottom="50px"
			padding-bottom="60px"
			padding-top="60px"
			background="#22262E"
		>
			{" "}
			<Text
				as="h2"
				font="normal 600 52px/1.2 --fontFamily-googleSourceSansPro"
				margin="4px 0 48px 0"
				color="--light"
				sm-font="normal 600 42px/1.2 --fontFamily-googleSourceSansPro"
				sm-margin-bottom="24px"
			>
				<Span
					color="--secondary"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Условия
				</Span>
				{" "}работы
			</Text>
			<Stack>
				<StackItem width="50%" lg-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="36px 54px 54px 54px"
						sm-padding="18px 36px 36px 36px"
						border-radius="12px"
						background="--color-darkL2"
						flex-direction="column"
					/>
					<Text as="p" font="normal 600 42px/1.2 --fontFamily-googleSourceSansPro" color="--secondary" margin="0">
						01→
					</Text>
					<Text
						as="p"
						font="normal 400 20px/30px --fontFamily-googleSourceSansPro"
						color="--light"
						margin="24px 0 0 0"
						padding-right="36px"
						sm-font="normal 400 16px/24px --fontFamily-googleSourceSansPro"
						width="80%"
					>
						Full-time или Half-time занятость, которая основывается полностью на вашем выборе
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="36px 54px 54px 54px"
						sm-padding="18px 36px 36px 36px"
						border-radius="12px"
						background="--color-darkL2"
						flex-direction="column"
					/>
					<Text as="p" font="normal 600 42px/1.2 --fontFamily-googleSourceSansPro" color="--secondary" margin="0">
						02→
					</Text>
					<Text
						as="p"
						font="normal 400 20px/30px --fontFamily-googleSourceSansPro"
						color="--light"
						margin="24px 0 0 0"
						padding-right="36px"
						sm-font="normal 400 16px/24px --fontFamily-googleSourceSansPro"
						width="80%"
					>
						Молодой, дружный и профессиональный коллектив.
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="36px 54px 54px 54px"
						sm-padding="18px 36px 36px 36px"
						border-radius="12px"
						background="--color-darkL2"
						flex-direction="column"
					/>
					<Text as="p" font="normal 600 42px/1.2 --fontFamily-googleSourceSansPro" color="--secondary" margin="0">
						03→
					</Text>
					<Text
						as="p"
						font="normal 400 20px/30px --fontFamily-googleSourceSansPro"
						color="--light"
						margin="24px 0 0 0"
						padding-right="36px"
						sm-font="normal 400 16px/24px --fontFamily-googleSourceSansPro"
						width="80%"
					>
						«Белая» заработная плата, уровень определяется по результатам собеседования.
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="36px 54px 54px 54px"
						sm-padding="18px 36px 36px 36px"
						border-radius="12px"
						background="--color-darkL2"
						flex-direction="column"
					/>
					<Text as="p" font="normal 600 42px/1.2 --fontFamily-googleSourceSansPro" color="--secondary" margin="0">
						04→
					</Text>
					<Text
						as="p"
						font="normal 400 20px/30px --fontFamily-googleSourceSansPro"
						color="--light"
						margin="24px 0 0 0"
						padding-right="36px"
						sm-font="normal 400 16px/24px --fontFamily-googleSourceSansPro"
						width="80%"
					>
						Все возможности для профессионального роста и развития. (конференции, обучение).
					</Text>
				</StackItem>
			</Stack>
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