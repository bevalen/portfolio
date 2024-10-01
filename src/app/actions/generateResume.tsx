'use server'

import { DATA } from "@/data/resume";
import { Document, Page, Text, View, StyleSheet, pdf, Svg, Path, Link } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 30,
        fontFamily: 'Helvetica',
    },
    header: {
        marginBottom: 10,
        alignItems: 'center', // Center the content
        justifyContent: 'center', // Center the content
    },
    name: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    title: {
        fontSize: 18,
        color: '#666',
        marginBottom: 10,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textTransform: 'uppercase',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingBottom: 5,
    },
    contactInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    contactItem: {
        fontSize: 10,
    },
    experienceItem: {
        marginBottom: 15,
        borderBottom: '1pt solid #CCCCCC',
        paddingBottom: 10,
    },
    jobHeader: {
        marginBottom: 5,
    },
    jobTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    jobDetails: {
        fontSize: 10,
        color: '#666',
        fontStyle: 'italic',
    },
    jobDescription: {
        fontSize: 10,
        marginTop: 5,
    },
    skillCategory: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
        textDecoration: 'underline',
    },
    skillList: {
        fontSize: 10,
        marginBottom: 10,
    },
    personalityItem: {
        marginBottom: 15,
    },
    personalityAssessment: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 2,
        color: '#333',
        textDecoration: 'underline',
    },
    personalityType: {
        fontSize: 10,
        color: 'blue',
        textDecoration: 'underline',
    },
    personalityDescription: {
        fontSize: 10,
        marginTop: 2,
    },
    contactItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    contactIcon: {
        width: 12,
        height: 12,
        marginRight: 5,
    },
    verticalDivider: {
        width: 1,
        backgroundColor: '#CCCCCC',
        marginHorizontal: 10,
    },
    horizontalDivider: {
        height: 1,
        backgroundColor: '#CCCCCC',
        marginVertical: 10,
    },
    contentContainer: {
        flexDirection: 'row',
        flex: 1,
    },
    referenceItem: {
        marginBottom: 15,
        backgroundColor: 'rgba(243, 244, 246, 1)', // Tailwind's gray-100
        padding: 10,
        borderRadius: 0,
    },
});

// Simple SVG paths for icons
const IconPaths = {
    phone: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z",
    email: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
    globe: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
    linkedin: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
    github: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
} as const;

type IconName = keyof typeof IconPaths;

const ContactItem = ({ icon, text, url }: { icon: IconName; text: string; url?: string }) => (
    <View style={styles.contactItemContainer}>
        {IconPaths[icon] && (
            <Svg style={styles.contactIcon} viewBox="0 0 24 24">
                <Path d={IconPaths[icon]} fill="#000000" />
            </Svg>
        )}
        {url ? (
            <Link src={url}>
                <Text style={styles.contactItem}>{text}</Text>
            </Link>
        ) : (
            <Text style={styles.contactItem}>{text}</Text>
        )}
    </View>
);

const formattedTel = `(${DATA.contact.tel.slice(2, 5)}) ${DATA.contact.tel.slice(5, 8)}-${DATA.contact.tel.slice(8)}`;

const ResumePDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.name}>{DATA.name}</Text>
                <Text style={styles.title}>US Marine | Tech Entrepreneur | Strategic Problem Solver</Text>
            </View>
            <View style={styles.horizontalDivider} />
            <View style={styles.contentContainer}>
                <View style={{ width: '30%', marginRight: 10 }}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Contact</Text>
                        <ContactItem icon="globe" text={DATA.location} url={DATA.locationLink} />
                        <ContactItem icon="phone" text={formattedTel} url={`tel:${DATA.contact.tel.slice(1)}`} />
                        <ContactItem icon="email" text={DATA.contact.email} url={`mailto:${DATA.contact.email}`} />
                        <ContactItem icon="globe" text={DATA.contact.resumeUrl} url={DATA.contact.resumeUrl} />
                        <ContactItem icon="linkedin" text={DATA.contact.social.LinkedIn.url} url={DATA.contact.social.LinkedIn.url} />
                        <ContactItem icon="github" text={DATA.contact.social.GitHub.url} url={DATA.contact.social.GitHub.url} />
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Personality</Text>
                        {Object.entries(DATA.personality).map(([key, value]) => (
                            <View key={key} style={styles.personalityItem}>
                                <Text style={styles.personalityAssessment}>{formatAssessmentName(key)}</Text>
                                <Link src={value.url}>
                                    <Text style={styles.personalityType}>{value.type} - {value.title}</Text>
                                </Link>
                                <Text style={styles.personalityDescription}>{value.description}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Skills</Text>
                        {Object.entries(DATA.skills).map(([category, skillList]) => (
                            <View key={category} style={{ marginBottom: 10 }}>
                                <Text style={styles.skillCategory}>{category}</Text>
                                <Text style={styles.skillList}>
                                    {skillList.map(skill => skill.name).join(', ')}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>
                <View style={styles.verticalDivider} />
                <View style={{ width: '70%', marginLeft: 10 }}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Professional Summary</Text>
                        <Text style={styles.jobDescription}>{DATA.summary}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Experience</Text>
                        {DATA.work.map((job) => (
                            <View key={job.company} style={styles.experienceItem}>
                                <View style={styles.jobHeader}>
                                    <Text style={styles.jobTitle}>{job.title}</Text>
                                    <Text style={styles.jobDetails}>{job.company} | {job.location} | {job.start} - {job.end}</Text>
                                </View>
                                <Text style={styles.jobDescription}>{job.description}</Text>
                                {job.accomplishments && (
                                    <View style={{ marginTop: 5 }}>
                                        {job.accomplishments.map((accomplishment, index) => (
                                            <Text key={index} style={{ ...styles.jobDescription, marginLeft: 10 }}>
                                                • {accomplishment}
                                            </Text>
                                        ))}
                                    </View>
                                )}
                            </View>
                        ))}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>References</Text>
                        {DATA.references.map((reference) => (
                            <View key={reference.name} style={styles.referenceItem}>
                                <Text style={styles.jobTitle}>{reference.name}</Text>
                                <Text style={styles.jobDetails}>{reference.title} | {reference.company}</Text>
                                <View style={{ marginTop: 5, marginBottom: 5 }}>
                                    {reference.links.map((link, index) => {
                                        let displayText = '';
                                        if (link.title === 'Phone') {
                                            displayText = formatPhoneNumber(link.href.replace('tel:', ''));
                                        } else if (link.title === 'Email') {
                                            displayText = link.href.replace('mailto:', '');
                                        } else {
                                            displayText = link.href;
                                        }
                                        const iconName = link.title.toLowerCase() as IconName;
                                        return (
                                            <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 2 }}>
                                                {IconPaths[iconName] && (
                                                    <Svg style={styles.contactIcon} viewBox="0 0 24 24">
                                                        <Path d={IconPaths[iconName]} fill="#000000" />
                                                    </Svg>
                                                )}
                                                <Link src={link.href}>
                                                    <Text style={{ ...styles.contactItem, marginLeft: 2 }}>{displayText}</Text>
                                                </Link>
                                            </View>
                                        );
                                    })}
                                </View>
                                {reference.description && (
                                    <Text style={styles.jobDescription}>{reference.description}</Text>
                                )}
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </Page>
    </Document>
);

const formatAssessmentName = (name: string) => {
    return name
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

const formatPhoneNumber = (phoneNumber: string) => {
    const cleaned = phoneNumber.replace(/\D/g, '');
    let match;
    if (cleaned.length === 11 && cleaned.startsWith('1')) {
        match = cleaned.match(/^1(\d{3})(\d{3})(\d{4})$/);
    } else {
        match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    }
    if (match) {
        const formatted = `(${match[1]}) ${match[2]}-${match[3]}`;
        return formatted;
    }
    return phoneNumber;
};

export async function generateResume() {
    const pdfBlob = await pdf(<ResumePDF />).toBlob();
    return pdfBlob;
}