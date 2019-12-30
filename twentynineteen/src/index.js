//import register block type package from wp.blocks to register block
import { registerBlockType } from '@wordpress/blocks';
//import editor controls from wp.editor 
import { RichText, InspectorControls, ColorPalette } from '@wordpress/editor';
//import panelbody package to add settings in sidebar from wp.components
import { PanelBody } from '@wordpress/components';

//function for registering gutenberg blocks
registerBlockType('brijesh/custom-text-block', {
    title: 'Custom Text Block',
    description: 'Block to generate a custom Text Block',
    icon: 'editor-paragraph',
    category: 'layout',

   // custom attributes
    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'h2'
        },
        titleColor: {
            type: 'string',
            default: 'black'
        },
        body: {
            type: 'string',
            source: 'html',
            selector: 'p'
        }
    },

    //function for rendring blocks on the post edit screen
    edit({ attributes, setAttributes }) {
        const {
            title,
            body,
            titleColor
        } = attributes;

        // custom functions
        function onChangeTitle(Title) {
            setAttributes( { title: Title } );
        }

        function onChangeBody(Body) {
            setAttributes( { body: Body } );
        }

        function onTitleColorChange(Color) {
            setAttributes( { titleColor: Color } );
        }

        return ([
            <InspectorControls style={ { marginBottom: '70px' } }>
                <PanelBody title={ 'Font Color Settings' }>
                    <p><strong>Select a Title color:</strong></p>
                    <ColorPalette value={ titleColor }
                                  onChange={ onTitleColorChange } />
                </PanelBody>
            </InspectorControls>,
            <div class="container">
                <RichText key="editable"
                          tagName="h2"
                          placeholder="Your Title"
                          value={ title }
                          onChange={ onChangeTitle }
                          style={ { color: titleColor } }/>
                <RichText key="editable"
                          tagName="p"
                          placeholder="Your Description"
                          value={ body }
                          onChange={ onChangeBody }/>
            </div>
        ]);
    },
    
    save({ attributes }) {
        const {
            title,
            body,
            titleColor
        } = attributes;

        return (
            <div class="container">
                <h2 style={ { color: titleColor } }>{ title }</h2>
                <RichText.Content tagName="p"
                                  value={ body }/>
            </div>
        );
    }
});