import React from "react";
import theme from "theme";
import { Theme, Link, Text, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Section, Override, StackItem, Formspree, Stack } from "@quarkly/components";
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
		<Section padding="120px 0 100px 0" background="rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(14, 19, 23) 0%, rgb(34, 38, 46) 100%) repeat scroll 0% 0% / auto padding-box border-box">
			<Text font="normal 700 38px/1.2 --fontFamily-googleSourceSansPro" color="#ffffff" text-align="center">
				Евангилиста продукта, который станет нашей частью на фул тайм или халф тайм, и сможет полюбить кваркли так как его любим мы, и выстраоить отношения с професиональным сообществом
			</Text>
		</Section>
		<Section padding="30px 0 30px 0" background="--color-darkL1">
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
						justify-content="center"
					/>
					{"        "}{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" flex-direction="column" padding="16px 0px 16px 16px">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="#22262E"
						padding="26px 26px 26px 26px"
						border-radius="12px"
						align-items="center"
					/>
					{"        "}
					<Formspree errorMessage="Something went wrong" completeText="Success" endpoint="https://formspree.io/f/mpzypyye" width="70%">
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
							border-color="--color-light"
							background="rgba(255, 255, 255, 0)"
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
							border-color="--color-light"
							background="rgba(255, 255, 255, 0)"
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
							background="rgba(255, 255, 255, 0)"
							hover-border-color="#66FFE4"
							color="#ffffff"
							required
							letter-spacing=".8PX"
							placeholder="TELEGRAM"
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
							{"\n\n"}
						</Text>
					</Formspree>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Components.Footer padding="14px 0 15px 0">
			<Override slot="text">
				© All Rights Reserved
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