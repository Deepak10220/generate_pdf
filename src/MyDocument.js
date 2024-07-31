import React from "react";
import {
  Document,
  Page,
  Text,
  Image,
  StyleSheet,
  View,
} from "@react-pdf/renderer";

const MyDocument = ({ formData }) => (
  <Document>
    <Page style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>User Information</Text>
        <View style={styles.section}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{formData.name}</Text>
        </View>
        {formData.photo && (
          <Image
            style={styles.image}
            src={URL.createObjectURL(formData.photo)}
          />
        )}
        <View style={styles.section}>
          <Text style={styles.label}>Rank:</Text>
          <Text style={styles.value}>{formData.rank}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>ID Number:</Text>
          <Text style={styles.value}>{formData.idNumber}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  body: {
    padding: 32,
    fontFamily: "Helvetica",
    backgroundColor: "#f3f4f6",
  },
  container: {
    padding: 24,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    border: "1px solid #e5e7eb",
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 24,
    fontWeight: "bold",
    color: "#1f2937",
  },
  section: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#f9fafb",
    border: "1px solid #e5e7eb",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4b5563",
    marginBottom: 8,
  },
  value: {
    fontSize: 14,
    color: "#374151",
  },
  image: {
    marginVertical: 16,
    width: 150,
    height: 150,
    objectFit: "cover",
    borderRadius: 8,
    border: "1px solid #d1d5db",
  },
});

export default MyDocument;
