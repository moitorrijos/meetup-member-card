import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
import { MediaUpload, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

registerBlockType( 'cgb/block-meetup-member-card', {
	title: __( 'Member Card' ),
	icon: <svg id="Solid" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><circle cx="176" cy="192" r="32" /><path d="m255.919 324.022c-1.897-46.684-37.019-84.022-79.919-84.022s-78.022 37.338-79.919 84.022c9.958 7.04 42.71 27.978 79.919 27.978s69.961-20.938 79.919-27.978z" /><path d="m72 416h368a24.028 24.028 0 0 0 24-24v-272a24.028 24.028 0 0 0 -24-24h-368a24.027 24.027 0 0 0 -24 24v272a24.027 24.027 0 0 0 24 24zm240-240h112a8 8 0 0 1 0 16h-112a8 8 0 0 1 0-16zm0 48h112a8 8 0 0 1 0 16h-112a8 8 0 0 1 0-16zm0 48h112a8 8 0 0 1 0 16h-112a8 8 0 0 1 0-16zm0 48h112a8 8 0 0 1 0 16h-112a8 8 0 0 1 0-16zm-166.2-90.724a48 48 0 1 1 60.394 0c38.188 13.742 65.806 52.802 65.806 98.724a8 8 0 0 1 -3 6.247c-1.725 1.378-42.771 33.753-93 33.753s-91.275-32.375-93-33.753a8 8 0 0 1 -3-6.247c0-45.922 27.618-84.982 65.8-98.724z" /></svg>,
	category: 'common',
	keywords: [
		__( 'team' ),
		__( 'member' ),
		__( 'card' ),
	],
	attributes: {
		title: {
			type: 'string',
			source: 'text',
			selector: '.card-title',
		},
		body: {
			type: 'string',
			source: 'text',
			selector: '.card-body',
		},
		imageId: {
			type: 'number',
		},
		imageAlt: {
			type: 'string',
			source: 'attribute',
			attribute: 'alt',
			selector: '.card-image',
		},
		imageUrl: {
			type: 'string',
			attribute: 'src',
			selector: '.card-image',
		},
	},
	edit: ( { className, attributes, setAttributes } ) => {
		const { imageUrl, imageAlt, imageId, body, title } = attributes;
		const onSelectImage = ( media ) => {
			setAttributes( {
				imageUrl: media.url,
				imageId: media.id,
				imageAlt: media.alt,
			} );
		};
		const onChangeTitle = ( value ) => {
			setAttributes( { title: value } );
		};
		const onChangeBody = ( value ) => {
			setAttributes( { body: value } );
		};
		return (
			<div className={ className }>
				<MediaUpload
					allowedTypes="image"
					value={ imageId }
					onSelect={ onSelectImage }
					render={ ( { open } ) => (
						<Button
							className={
								imageId ? 'image-button' : 'button button-large'
							}
							onClick={ open }
						>
							{
								! imageId ? (
									__( 'Upload Image' )
								) : (
									<img
										src={ imageUrl }
										alt={ imageAlt }
									/>
								)
							}
						</Button>
					) }
				/>
				<RichText
					tagName="h3"
					placeholder={ __( 'Your Name' ) }
					multiline={ false }
					value={ title }
					className=".card-title"
					onChange={ onChangeTitle }
				/>
				<RichText
					tagName="p"
					placeholder={ __( 'Your Bio' ) }
					value={ body }
					onChange={ onChangeBody }
					className="card-body"
				/>
			</div>
		);
	},
	save: ( { className, attributes } ) => {
		const { title, body, imageUrl, imageAlt } = attributes;
		return (
			<div className={ className }>
				{ imageUrl && (
					<img
						className="card-image"
						src={ imageUrl }
						alt={ imageAlt }
					/>
				) }
				<RichText.Content tagName="h3" className="card-title" value={ title } />
				<RichText.Content tagName="p" className="card-body" value={ body } />
			</div>
		);
	},
} );
