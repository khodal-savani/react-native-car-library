import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Formik, FormikProps } from 'formik';
import { CreateCarRequest } from '../../redux/Reducers';
import { styles } from './AddCarScreenStyles';
import useAddCarScreen, { initialValues, validationSchema } from './useAddCarScreen';
import { Icons } from '../../assets';
import ScreenWrapper from '../../components/screen-wrapper/ScreenWrapper';

export default function AddCarScreen() {
  const {
    carTypes,
    carTags,
    createLoading,
    showCarTypeSelect,
    setShowCarTypeSelect,
    showSpecSelect,
    setShowSpecSelect,
    handleSubmit,
    onBackPress,
  } = useAddCarScreen();

  const renderForm = (formikProps: FormikProps<CreateCarRequest>) => {
    const { values, errors, touched, handleChange, handleBlur, setFieldValue, setFieldTouched } = formikProps;

    return (
      <View style={styles.form}>
        <View style={styles.field}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Car name<Text style={styles.requiredAsterisk}>*</Text></Text>
            {errors.name && touched.name && <Text style={styles.error}>Mandatory</Text>}
          </View>
          <TextInput
            style={[
              styles.input,
              errors.name && touched.name && styles.inputError
            ]}
            placeholder="Enter car name"
            value={values.name}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            maxLength={50}
          />
        </View>

        <View style={styles.field}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Description</Text>
            <Text style={styles.charCount}>{values.description.length}/200 char</Text>
          </View>
          <TextInput
            style={[
              styles.input,
              styles.textArea,
              errors.description && touched.description && styles.inputError
            ]}
            placeholder="Enter here"
            value={values.description}
            onChangeText={handleChange('description')}
            onBlur={handleBlur('description')}
            multiline
            numberOfLines={4}
            maxLength={200}
          />
        </View>

        <View style={styles.field}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Car type<Text style={styles.requiredAsterisk}>*</Text></Text>
            {errors.carType && touched.carType && <Text style={styles.error}>Mandatory</Text>}
          </View>
          <View style={styles.selectContainer}>
            <TouchableOpacity
              style={[
                styles.select,
                errors.carType && touched.carType && styles.inputError
              ]}
              onPress={() => setShowCarTypeSelect(!showCarTypeSelect)}
            >
              <Text style={styles.selectText}>
                {values.carType === 'automatic' ? 'Automatic' : 'Manual'}
              </Text>
              <Image source={showCarTypeSelect ? Icons.upArrow : Icons.downArrow} style={styles.upArrowIcon} />
            </TouchableOpacity>

            {showCarTypeSelect && (
              <View style={styles.dropdown}>
                {carTypes.map((type) => {
                  const isSelected = values.carType === type;
                  return (
                    <TouchableOpacity
                      key={type}
                      style={styles.dropdownOption}
                      onPress={() => {
                        setFieldValue('carType', type);
                        setFieldTouched('carType', true);
                        setShowCarTypeSelect(false);
                      }}
                    >
                      <View style={styles.optionRow}>
                        <View
                          style={[
                            styles.radioOuter,
                            isSelected && styles.radioOuterSelected,
                          ]}
                        >
                          {isSelected && <Text style={styles.radioCheck}>✓</Text>}
                        </View>
                        <Text style={styles.dropdownText}>
                          {type === 'automatic' ? 'Automatic' : 'Manual'}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </View>
        </View>

        <View style={styles.field}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Specifications<Text style={styles.requiredAsterisk}>*</Text></Text>
            {errors.tags && touched.tags && values.tags.length === 0 && <Text style={styles.error}>Mandatory</Text>}
          </View>
          <View style={styles.selectContainer}>
            <TouchableOpacity
              style={[
                styles.select,
                errors.tags && touched.tags && values.tags.length === 0 && styles.inputError
              ]}
              onPress={() => setShowSpecSelect(!showSpecSelect)}
            >
              <Text style={styles.selectText}>
                {values.tags.length === 0
                  ? 'Select'
                  : values.tags.length === 1
                  ? values.tags[0]
                  : `${values.tags.length} selected`}
              </Text>
              <Image source={showSpecSelect ? Icons.upArrow : Icons.downArrow} style={styles.upArrowIcon} />
            </TouchableOpacity>

            {showSpecSelect && (
              <View style={[styles.dropdown, styles.dropdownTop]}>
                <ScrollView style={{ maxHeight: 260 }}>
                  {carTags.map((tag) => {
                    const isSelected = values.tags.includes(tag);
                    return (
                      <TouchableOpacity
                        key={tag}
                        style={styles.dropdownOption}
                        onPress={() => {
                          const next = isSelected
                            ? values.tags.filter(t => t !== tag)
                            : [...values.tags, tag];
                          setFieldValue('tags', next);
                          setFieldTouched('tags', true);
                        }}
                      >
                        <View style={styles.optionRow}>
                          <View
                            style={[
                              styles.checkboxOuter,
                              isSelected && styles.checkboxOuterSelected,
                            ]}
                          >
                            {isSelected && <Text style={styles.checkboxCheck}>✓</Text>}
                          </View>
                          <Text style={styles.dropdownText}>{tag}</Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
            )}
          </View>
          {values.tags.length > 0 && (
            <View style={styles.chipsContainer}>
              {values.tags.map(tag => (
                <View key={tag} style={styles.chip}>
                  <Text style={styles.chipText}>{tag}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      const next = values.tags.filter(t => t !== tag);
                      setFieldValue('tags', next);
                      setFieldTouched('tags', true);
                    }}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    <Text style={styles.chipRemove}>×</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
        </View>

        <View style={styles.field}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Car Image URL<Text style={styles.requiredAsterisk}>*</Text></Text>
            {errors.imageUrl && touched.imageUrl && <Text style={styles.error}>Mandatory</Text>}
          </View>
          <TextInput
            style={[
              styles.input,
              errors.imageUrl && touched.imageUrl && styles.inputError
            ]}
            placeholder="Enter here"
            value={values.imageUrl}
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="url"
          />
        </View>
      </View>
    );
  };

  return (
    <ScreenWrapper>
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={onBackPress}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add Car</Text>
        </View>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps) => (
            <>
              <ScrollView style={styles.content}>
                {renderForm(formikProps)}
              </ScrollView>

              <View>
                <TouchableOpacity
                  style={[
                    styles.addButton,
                    (createLoading || formikProps.isSubmitting) && styles.addButtonDisabled
                  ]}
                  onPress={formikProps.handleSubmit}
                  disabled={createLoading || formikProps.isSubmitting}
                >
                  <Text style={styles.addButtonText}>
                    {createLoading || formikProps.isSubmitting ? 'Adding...' : 'Add'}
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
    </ScreenWrapper>
  );
}