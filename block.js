import {HorizontalBar} from 'react-chartjs-2';

const { __ } = wp.i18n;
const {
	registerBlockType,
	InspectorControls,
	BlockDescription,
	source: { attr }
} = wp.blocks;

registerBlockType( 'soerenwrede/gutenberg-charts', {

	title: __( 'Chart' ),

	icon: 'chart-bar',

	category: 'common',

	keywords: [ __( 'bar' ) ],

	// useOnce: true,

	// className: false,

	// supportAnchor: true,

	attributes: {
		percent: {
			type: 'number',
			source: attr( 'div', 'data-value' ),
			default: 100
		}
	},

	edit ( { attributes, setAttributes, focus } ) {

		const { percent } = attributes;

		const data = {
			datasets: [{
				data: [percent],
				backgroundColor: ['#0073aa'],
				borderColor: ['#23282d'],
				borderWidth: 2
			}]
		};

		const options = {
			legend: { display: false },
			scales: {
				xAxes: [{
					display: false,
					ticks: {
						beginAtZero: true,
						suggestedMin: 0,
						suggestedMax: 100
					}
				}],
				yAxes: [{
					display: false
				}],
			}
		};

		return (
			<div>
				<HorizontalBar data={data} options={options} height={50} />
				{ focus &&
				<InspectorControls key="inspector">
					<BlockDescription>
						<p>{ __( 'Dies ist eine Beschreibung.' ) }</p>
					</BlockDescription>
					<h3>{ __( 'Chart Settings' ) }</h3>
					<InspectorControls.TextControl
						label={ __( 'Percent' ) }
						value={ percent }
						onChange={ (value) => setAttributes( { percent: value } ) }
					/>
				</InspectorControls>
				}
			</div>
		);
	},
	save: props => {
		return (
			<div
				data-value={ props.attributes.percent }
			></div>
		)
	}
} );