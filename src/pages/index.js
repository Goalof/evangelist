import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Input, Button, Span } from "@quarkly/widgets";
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
		<Section background="linear-gradient(180deg, #0E1317 0%, #22262E 100%)" padding="70px 0 70px 0">
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
						align-items="flex-start"
						border-radius="12px"
						justify-content="flex-start"
					/>
					<Box width="100%" display="flex" align-items="center" margin="0px 0px 30px 0px">
						<Image width="64px" height="64px" src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(8).svg?v=2020-11-06T00:37:40.225Z" />
						<Text margin="0px 0px 0px 36px" font="normal 400 44px/66px --fontFamily-sans" color="#ffffff">
							Что нужно делать?
						</Text>
					</Box>
					<Box display="flex" align-items="center" justify-content="flex-start" margin="0px 0px 0px 20px">
						<Image src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(7).svg?v=2020-11-06T00:32:44.685Z" margin="-27px 21px 0px 0px" />
						<Text font="normal 400 20px/30px --fontFamily-googleSourceSansPro" color="#ffffff">
							Выстраивает и поддерживает качественные отношения с лидерами и авторитетами ИТ-сообщества.{" "}
							<br />
						</Text>
					</Box>
					<Box display="flex" align-items="center" justify-content="center" margin="0px 0px 0px 20px">
						<Image src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(7).svg?v=2020-11-06T00:32:44.685Z" margin="3px 21px 0px 0px" width="16px" />
						<Text font="normal 400 20px/30px --fontFamily-googleSourceSansPro" color="#ffffff" margin="0ppx 0px 16px 0px">
							Продвигает Quarkly, нести ценность в массы.{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" align-items="center" justify-content="center" margin="0px 0px 0px 20px">
						<Image src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(7).svg?v=2020-11-06T00:32:44.685Z" margin="3px 21px 0px 0px" width="16px" />
						<Text font="normal 400 20px/30px --fontFamily-googleSourceSansPro" color="#ffffff" margin="0ppx 0px 16px 0px">
							Создавать великолепный контент.{" \n\n"}
						</Text>
					</Box>
					<Box display="flex" align-items="center" justify-content="center" margin="0px 0px 0px 20px">
						<Image src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(7).svg?v=2020-11-06T00:32:44.685Z" margin="-58px 21px 0px 0px" width="16px" />
						<Text font="normal 400 20px/30px --fontFamily-googleSourceSansPro" color="#ffffff" margin="0ppx 0px 16px 0px">
							Принимает активное участие в жизни quarkly через блоги, социальные сети, встречи, конференции, форумы и другие мероприятия.{" "}
							<br />
							{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" align-items="center" justify-content="center" margin="0px 0px 0px 20px">
						<Image src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Vector%20(7).svg?v=2020-11-06T00:32:44.685Z" margin="-27px 21px 0px 0px" width="16px" />
						<Text font="normal 400 20px/30px --fontFamily-googleSourceSansPro" color="#ffffff" margin="0ppx 0px 16px 0px">
							Коммуницировать с блогерами, журналистами и редакторами тематических сайтов.{"\n\n"}
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
						margin="0px 0px 15px 0px"
						justify-content="center"
					>
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/5f37f93e5f5c20001ea9c99e/images/Group%20(25).svg?v=2020-11-05T23:46:00.699Z"
							background="#FFFFFF"
							border-radius="50%"
							padding="10px 10px 10px 10px"
						/>
						<Text margin="-5px 0px 0px 36px" font="normal 400 44px/66px --fontFamily-sans" color="#ffffff">
							Обратная связь
						</Text>
					</Box>
					<Text font="normal 400 25px/37px --fontFamily-googleSourceSansPro" color="#ffffff" margin="0px 0px 16px 0px">
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
							height="120px"
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
							background="--color-secondary"
						>
							SEND
						</Button>
						<Text font="12px --fontFamily-googleSourceSansPro" color="--light" text-align="center">
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
			padding="100px 0"
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
				font="normal 600 42px/1.2 --fontFamily-googleSourceSansPro"
				margin="4px 0 48px 0"
				color="--light"
				sm-font="--h2Sm"
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
			<Stack gap="12px">
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
						sm-font="--baseSm"
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
						sm-font="--baseSm"
						width="80%"
					>
						Молодой, дружный и профессиональный коллектив.{"\n\n"}
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
						sm-font="--baseSm"
						width="80%"
					>
						«Белая» заработная плата, уровень определяется по результатам собеседования.{"\n\n"}
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
						sm-font="--baseSm"
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