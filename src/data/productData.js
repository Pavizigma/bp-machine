import prod1 from '../assets/images/product-trommel.png';
import prod2 from '../assets/images/Trommel-1.png';
import prod3 from '../assets/images/conveyor.png';
import prod4 from '../assets/images/DSS.png';
import prod5 from '../assets/images/product-ads.jpg';
import prod6 from '../assets/images/OBMS.png';
import prod7 from '../assets/images/cy2.jpg';
import prod8 from '../assets/images/ADS.png';

export const products = [

  {
    id: 'trommels',
    name: 'Trommels',
    tag: 'Waste Separation',
    image: prod2,
    description: 'Combination-based design trommels optimized for waste processing, featuring self-cleaning arrangements and easy spare part replacement.',
    longDescription: 'Zigma Trommels are effectively engineered for screening materials based on size. Our trommels use high-quality IS 2062 E 350 Grade material for handling different types of waste, especially wet materials, with a specialized self-cleaning customized design.',
    features: [
      'Combination-based design optimized for waste processing',
      'Customized design with self-cleaning arrangements for handling wet materials',
      'Skid-mounted with VFD control for ease of operation',
      'Screen segments 18/20/40/50/70/100mm designed for ease of fixing',
      'Wear parts easily replaceable at working site (50,000 to 100,000 tons life)'
    ],
    specs: [
      { label: 'Capacity', value: '20 to 50 cubic meter per hour' },
      { label: 'Electrical System', value: '10 HP to 40 HP twin drive system with VFD' },
      { label: 'Operating Speed', value: '5 rpm to 22 rpm' },
      { label: 'Inclination', value: '2 Deg to 7 Deg' },
      { label: 'Material Grade', value: 'IS 2062 E 350 Grade' },
      { label: 'Spare Parts Life', value: '1 lakhs to 2 lakhs tons' }
    ],
    gallery: [prod2],
    color: '#2563eb',
  },
  {
    id: 'conveyors',
    name: 'Conveyors',
    tag: 'Material Handling',
    image: prod3,
    description: 'Superior design belt conveyors for precise material handling, ensuring ease of placement, dismantling, and assembly.',
    longDescription: 'Zigma Belt Conveyors are built from high-quality steel (Grade IS 2062 from SAIL/VIZAG/Jindal), and are suitable for diverse MSW processing applications. The systems are designed in flat or troughing types with screw-type tensioning devices and feature hardened diamond shape rubber lagging on the head pulley.',
    features: [
      'Superior design for placement, ease of dismantling and assembly',
      'High quality steel components (Flat or troughing type)',
      'Head pulley with hardened diamond shape rubber lagging',
      'Screw type tensioning device for reliable belt tuning',
      'Structural base frame using Grade IS 2062 steel'
    ],
    specs: [
      { label: 'Belt Width & Speed', value: '500mm - 1500mm width at 0.5 to 2.0 m/s speed' },
      { label: 'Max Inclination', value: 'Up to 30 degrees' },
      { label: 'Belt Type', value: '3 ply 315/3 M24 grade (9 to 10mm thick)' },
      { label: 'Drive Unit (Geared Motor)', value: '5 / 7.5 / 10 / 15 HP (with chain sprocket)' },
      { label: 'Geared Motor Make', value: 'ABB / Siemens / Premium / Bonfiglioli' }
    ],
    gallery: [prod3],
    color: '#7c3aed',
  },
  {
    id: 'disc-screen-separator',
    name: 'Disc Screen Separator',
    tag: 'High-Volume Screening',
    image: prod4,
    description: 'Ideal for high-volume screening of all material types including Inserts and RDF. Simple arrangement with minimal maintenance.',
    longDescription: 'The Disc Screen Separator uses rotating discs to efficiently separate fine materials from larger fractions. It is particularly effective for processing high-moisture waste and materials that tend to clog traditional screens.',
    features: ['High-volume screening capacity', 'All material types (Inserts, RDF)', 'Minimal maintenance requirements', 'Energy-efficient, low operational costs'],
    specs: [
      { label: 'Throughput', value: 'High volume' },
      { label: 'Separation Efficiency', value: '> 90%' },
      { label: 'Disc Material', value: 'Hardened wear-resistant steel' },
      { label: 'Maintenance', value: 'Self-cleaning design' }
    ],
    gallery: [prod4],
    color: '#dc2626',
  },
  {
    id: 'air-density-separator',
    name: 'Air Density Separator',
    tag: 'Safety-First Design',
    image: prod8,
    description: 'Air Density Separators featuring a complete set of feed and density material conveyors with a highly efficient centrifugal fan and duct arrangement.',
    longDescription: 'The Air Density Separator is designed for the separation of combustible fractions in MSW. It features a controlled airflow blower and directly coupled centrifugal fan. The setup includes one set of feed conveyor, a light density material conveyor with hood, and a heavy density material conveyor.',
    features: [
      'Complete set with feed conveyor, light density conveyor with hood, and heavy density conveyor',
      'Direct drive centrifugal fan with duct arrangement',
      'Fan provided with Inspection door and drain plug',
      'Dynamically balanced impeller mounted on motor shaft',
      'Suitable for separation of combustible fraction in MSW'
    ],
    specs: [
      { label: 'Air Quantity', value: '9000 cum/hr to 14000 cum/hr' },
      { label: 'Total Pressure', value: '120 mm WC' },
      { label: 'Centrifugal Fan Motor', value: '5/7.5/10 hp (3.75/5.5/7.5 kw) 1440 rpm, 415 V, 50 hz, 3 phase' },
      { label: 'Motor Make', value: 'ABB / Siemens / Havells' },
      { label: 'Fan Inlet/Outlet', value: 'Inlet: dia. 630 mm | Outlet: 710 x 450 mm' },
      { label: 'Rotation & Drive', value: 'Clockwise (drive end), Direct Drive' }
    ],
    gallery: [prod5],
    color: '#ea580c',
  },
  {
    id: 'magnetic-separator',
    name: 'Over Band Magnetic Separator',
    tag: 'Metal Recovery',
    image: prod6,
    description: 'High-strength magnetic separator to efficiently extract and pick up all steel and tramp iron pieces from MSW streams.',
    longDescription: 'The Zigma Over Band Magnetic Separator (OBMS) is designed to operate seamlessly over 1000mm to 1500mm width belt conveyors. Delivering a magnetic strength of 450 Gauss at an operating height, it expertly isolates ferrous metals from municipal solid waste using highly durable cleated type belts.',
    features: [
      'Capability to pick up all steel pieces and tramp iron from MSW',
      'Suitable for 1000mm and 1500 mm width belt conveyors',
      'Belt Cleated type 315/3 grade for consistent performance',
      'Includes hanging accessories (Turn buckle 1.6 ton and D shackle 2.5 tons)',
      'Rotex coupling integrated with Motor and Gear Box'
    ],
    specs: [
      { label: 'Magnet Size', value: '1000mm x 1000mm x 250mm' },
      { label: 'Magnetic Strength', value: '450 Gauss (at operating height)' },
      { label: 'Operating Height', value: '200 to 250mm from top material layer' },
      { label: 'Motor and Gear Box', value: '3hp/5hp (Powerbuild/Premium)' },
      { label: 'Belt Type', value: 'Cleated type 315/3 grade' }
    ],
    gallery: [prod6],
    color: '#0891b2',
  },
  {
    id: 'cyclone-collector',
    name: 'Cyclone Collector',
    tag: 'Air Filtration',
    image: prod7,
    description: 'High-efficiency Cyclone Collectors with statically and dynamically balanced impellers and robust M.S. sheet construction.',
    longDescription: 'Our Cyclone Collectors offer a comprehensive particulate separation solution leveraging directly-coupled centrifugal fans and dynamically balanced impellers. Featuring deep structural rigidity through thick 3.15 mm mild steel sheet construction and multiple damper systems, it provides unparalleled air filtration for industrial zones.',
    features: [
      'Fan provided with Inspection door, drain plug & statically/dynamically balanced impeller',
      'Common base frame made out of ISMC channels with 1 set of foundation bolts',
      'Motor guard – G.I and Cushy Foot Mountings included',
      'Cyclone components (Casing, Hopper, Eddy trap) MOC: 3.15 mm thick mild steel sheet',
      'Supporting structure made of ISMC channel and ISA angle'
    ],
    specs: [
      { label: 'Suction Air Quantity', value: '21000 cum/hour' },
      { label: 'Centrifugal Fan Motor', value: '30 hp 1440 rpm (IE2) TEFC, Squirrel cage, 415 V, 50 Hz, 3 phase' },
      { label: 'Motor Make', value: 'ABB / SIEMENS / HAVELLS' },
      { label: 'Butterfly Damper', value: 'dia. 630 mm x 630 mm long' },
      { label: 'Sliding Damper', value: 'dia. 300 mm fitted below hopper' },
      { label: 'Cyclone Type Size', value: 'dia. 1800 x ~9000 mm height' }
    ],
    gallery: [prod7],
    color: '#059669',
  },
];
